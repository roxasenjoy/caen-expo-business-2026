<?php
/**
 * Petits helpers partagés (réponse JSON, lecture body JSON, validations).
 */

declare(strict_types=1);

function idlabs_send_json(int $status, array $data): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function idlabs_read_json_body(): array
{
    $raw = file_get_contents('php://input') ?: '';
    if ($raw === '') {
        return [];
    }
    $decoded = json_decode($raw, true);
    if (!is_array($decoded)) {
        idlabs_send_json(400, ['error' => 'JSON invalide']);
    }
    return $decoded;
}

function idlabs_require_method(string $method): void
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== $method) {
        idlabs_send_json(405, ['error' => 'Méthode non autorisée']);
    }
}

function idlabs_str(?string $value, int $maxLen = 255): string
{
    $v = trim((string) $value);
    if (mb_strlen($v) > $maxLen) {
        $v = mb_substr($v, 0, $maxLen);
    }
    return $v;
}

function idlabs_email(?string $value): ?string
{
    $v = trim((string) $value);
    if ($v === '') {
        return null;
    }
    return filter_var($v, FILTER_VALIDATE_EMAIL) ?: null;
}
