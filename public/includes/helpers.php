<?php
/**
 * Petits helpers partagés (réponse JSON, lecture body JSON, validations).
 */

function idlabs_send_json($status, $data)
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function idlabs_read_json_body()
{
    $raw = file_get_contents('php://input');
    if ($raw === false || $raw === '') {
        return array();
    }
    $decoded = json_decode($raw, true);
    if (!is_array($decoded)) {
        idlabs_send_json(400, array('error' => 'JSON invalide'));
    }
    return $decoded;
}

function idlabs_require_method($method)
{
    $actual = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : '';
    if ($actual !== $method) {
        idlabs_send_json(405, array('error' => 'Méthode non autorisée'));
    }
}

function idlabs_str($value, $maxLen = 255)
{
    $v = trim((string) $value);
    if (mb_strlen($v) > $maxLen) {
        $v = mb_substr($v, 0, $maxLen);
    }
    return $v;
}

function idlabs_email($value)
{
    $v = trim((string) $value);
    if ($v === '') {
        return null;
    }
    $result = filter_var($v, FILTER_VALIDATE_EMAIL);
    return $result !== false ? $result : null;
}
