<?php
/**
 * Authentification admin pour ID Labs.
 *
 * - Le code admin est stocké en BDD sous forme de hash bcrypt
 *   (table admin_credentials, 1 seule ligne : id = 1).
 * - Les sessions PHP sont stockées en BDD (table sessions), chiffrées
 *   avec AES-256-CBC + HMAC via IdlabsDbSession.
 */

declare(strict_types=1);

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/session_handler.php';

function idlabs_session_start(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }

    $handler = new IdlabsDbSession(idlabs_db(), SESSION_SECRET, 7200);
    session_set_save_handler($handler, true);

    session_name('idlabs_sid');
    session_set_cookie_params([
        'lifetime' => 7200,
        'path'     => '/',
        'secure'   => false,   // mettre à true derrière HTTPS
        'httponly' => true,
        'samesite' => 'Lax',
    ]);
    session_start();
}

function idlabs_is_admin(): bool
{
    idlabs_session_start();
    return !empty($_SESSION['idlabs_admin']) && $_SESSION['idlabs_admin'] === true;
}

/**
 * Récupère le hash bcrypt courant en BDD, ou null s'il n'a jamais été défini.
 */
function idlabs_admin_hash_get(): ?string
{
    $stmt = idlabs_db()->query('SELECT password_hash FROM admin_credentials WHERE id = 1 LIMIT 1');
    $row = $stmt->fetchColumn();
    return ($row === false || $row === null) ? null : (string) $row;
}

/**
 * Met à jour le code admin en BDD (hashé avec bcrypt).
 */
function idlabs_admin_hash_set(string $newPlain): void
{
    if ($newPlain === '') {
        throw new InvalidArgumentException('Code admin vide');
    }
    $hash = password_hash($newPlain, PASSWORD_BCRYPT, ['cost' => 12]);
    if ($hash === false) {
        throw new RuntimeException('Impossible de hasher le code admin');
    }
    $stmt = idlabs_db()->prepare(
        'INSERT INTO admin_credentials (id, password_hash) VALUES (1, :h)
         ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash)'
    );
    $stmt->execute([':h' => $hash]);
}

function idlabs_check_admin_code(string $candidate): bool
{
    if ($candidate === '') {
        return false;
    }

    $hash = idlabs_admin_hash_get();

    if ($hash === null || !password_verify($candidate, $hash)) {
        return false;
    }

    if (password_needs_rehash($hash, PASSWORD_BCRYPT, ['cost' => 12])) {
        try { idlabs_admin_hash_set($candidate); } catch (Throwable $e) { /* ignore */ }
    }

    return true;
}

function idlabs_login_admin(): void
{
    idlabs_session_start();
    session_regenerate_id(true);
    $_SESSION['idlabs_admin']       = true;
    $_SESSION['idlabs_admin_since'] = time();
}

function idlabs_logout_admin(): void
{
    idlabs_session_start();
    $_SESSION = [];
    if (ini_get('session.use_cookies')) {
        $params = session_get_cookie_params();
        setcookie(
            session_name(), '',
            time() - 42000,
            $params['path'],
            $params['domain'] ?? '',
            $params['secure'],
            $params['httponly']
        );
    }
    session_destroy();
}

/**
 * À placer en haut de toute page protégée.
 * Redirige vers login.php si l'utilisateur n'est pas authentifié.
 */
function idlabs_require_admin(string $loginPath = 'login.php'): void
{
    if (!idlabs_is_admin()) {
        header('Location: ' . $loginPath);
        exit;
    }
}

/**
 * Pour les endpoints API : renvoie 401 JSON si non authentifié.
 */
function idlabs_require_admin_api(): void
{
    if (!idlabs_is_admin()) {
        http_response_code(401);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['error' => 'Authentification requise']);
        exit;
    }
}
