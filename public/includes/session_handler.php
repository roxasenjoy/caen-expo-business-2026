<?php
/**
 * Custom session handler — stocke les sessions PHP en BDD MySQL
 * avec chiffrement AES-256-CBC et signature HMAC-SHA256.
 *
 * Format binaire du payload stocké en colonne LONGBLOB :
 *
 *     [ IV  : 16 octets ] [ HMAC : 32 octets ] [ ciphertext : N octets ]
 *
 * - La clé de chiffrement et celle d'authentification dérivent toutes deux
 *   de SESSION_SECRET (.env) via SHA-256, mais avec deux salts différents
 *   pour éviter d'utiliser la même clé partout.
 * - HMAC vérifié en temps constant avant déchiffrement (encrypt-then-MAC).
 */

declare(strict_types=1);

final class IdlabsDbSession implements SessionHandlerInterface
{
    private PDO $pdo;
    private string $encKey;
    private string $macKey;
    private int $lifetime;

    public function __construct(PDO $pdo, string $secret, int $lifetime = 7200)
    {
        $this->pdo      = $pdo;
        $this->encKey   = hash('sha256', 'idlabs-session-enc|' . $secret, true);
        $this->macKey   = hash('sha256', 'idlabs-session-mac|' . $secret, true);
        $this->lifetime = max(60, $lifetime);
    }

    public function open(string $savePath, string $sessionName): bool
    {
        return true;
    }

    public function close(): bool
    {
        return true;
    }

    #[\ReturnTypeWillChange]
    public function read(string $id): string|false
    {
        $stmt = $this->pdo->prepare(
            'SELECT payload FROM sessions WHERE id = :id AND expires_at > NOW() LIMIT 1'
        );
        $stmt->execute([':id' => $id]);
        $blob = $stmt->fetchColumn();

        if ($blob === false || $blob === null || $blob === '') {
            return '';
        }
        $plain = $this->decrypt((string) $blob);
        return $plain !== null ? $plain : '';
    }

    public function write(string $id, string $data): bool
    {
        $payload = $this->encrypt($data);
        $expires = date('Y-m-d H:i:s', time() + $this->lifetime);

        $stmt = $this->pdo->prepare(
            'INSERT INTO sessions (id, payload, expires_at) VALUES (:id, :p, :e)
             ON DUPLICATE KEY UPDATE payload = VALUES(payload), expires_at = VALUES(expires_at)'
        );
        $stmt->bindValue(':id', $id, PDO::PARAM_STR);
        $stmt->bindValue(':p',  $payload, PDO::PARAM_LOB);
        $stmt->bindValue(':e',  $expires, PDO::PARAM_STR);
        return $stmt->execute();
    }

    public function destroy(string $id): bool
    {
        $stmt = $this->pdo->prepare('DELETE FROM sessions WHERE id = :id');
        return $stmt->execute([':id' => $id]);
    }

    #[\ReturnTypeWillChange]
    public function gc(int $maxlifetime): int|false
    {
        $stmt = $this->pdo->prepare('DELETE FROM sessions WHERE expires_at < NOW()');
        $stmt->execute();
        return $stmt->rowCount();
    }

    private function encrypt(string $plain): string
    {
        $iv     = random_bytes(16);
        $cipher = openssl_encrypt($plain, 'AES-256-CBC', $this->encKey, OPENSSL_RAW_DATA, $iv);
        if ($cipher === false) {
            throw new RuntimeException('Échec du chiffrement de la session');
        }
        $hmac = hash_hmac('sha256', $iv . $cipher, $this->macKey, true);
        return $iv . $hmac . $cipher;
    }

    private function decrypt(string $blob): ?string
    {
        if (strlen($blob) < 16 + 32 + 1) {
            return null;
        }
        $iv     = substr($blob, 0, 16);
        $hmac   = substr($blob, 16, 32);
        $cipher = substr($blob, 48);

        $expected = hash_hmac('sha256', $iv . $cipher, $this->macKey, true);
        if (!hash_equals($expected, $hmac)) {
            return null;
        }

        $plain = openssl_decrypt($cipher, 'AES-256-CBC', $this->encKey, OPENSSL_RAW_DATA, $iv);
        return $plain !== false ? $plain : null;
    }
}
