<?php
/**
 * Authentification admin pour ID Labs.
 *
 * - Le code admin est stocké en BDD sous forme de hash bcrypt
 *   (table admin_credentials, 1 seule ligne : id = 1).
 * - Les sessions PHP sont stockées en BDD (table sessions), chiffrées
 *   avec AES-256-CBC + HMAC via IdlabsDbSession.
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/session_handler.php';

function idlabs_session_start()
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }

    $handler = new IdlabsDbSession(idlabs_db(), SESSION_SECRET, 7200);
    session_set_save_handler($handler, true);

    session_name('idlabs_sid');
    session_set_cookie_params(7200, '/', '', false, true);
    session_start();
}

function idlabs_is_admin()
{
    idlabs_session_start();
    return !empty($_SESSION['idlabs_admin']) && $_SESSION['idlabs_admin'] === true;
}

function idlabs_admin_hash_get()
{
    $stmt = idlabs_db()->query('SELECT password_hash FROM admin_credentials WHERE id = 1 LIMIT 1');
    $row = $stmt->fetchColumn();
    return ($row === false || $row === null) ? null : (string) $row;
}

function idlabs_admin_hash_set($newPlain)
{
    if ($newPlain === '') {
        throw new InvalidArgumentException('Code admin vide');
    }
    $hash = password_hash($newPlain, PASSWORD_BCRYPT, array('cost' => 12));
    if ($hash === false) {
        throw new RuntimeException('Impossible de hasher le code admin');
    }
    $stmt = idlabs_db()->prepare(
        'INSERT INTO admin_credentials (id, password_hash) VALUES (1, :h)
         ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash)'
    );
    $stmt->execute(array(':h' => $hash));
}

function idlabs_check_admin_code($candidate)
{
    if ($candidate === '') {
        return false;
    }

    $hash = idlabs_admin_hash_get();

    if ($hash === null || !password_verify($candidate, $hash)) {
        return false;
    }

    if (password_needs_rehash($hash, PASSWORD_BCRYPT, array('cost' => 12))) {
        try { idlabs_admin_hash_set($candidate); } catch (Exception $e) { /* ignore */ }
    }

    return true;
}

function idlabs_login_admin()
{
    idlabs_session_start();
    session_regenerate_id(true);
    $_SESSION['idlabs_admin']       = true;
    $_SESSION['idlabs_admin_since'] = time();
}

function idlabs_logout_admin()
{
    idlabs_session_start();
    $_SESSION = array();
    if (ini_get('session.use_cookies')) {
        $params = session_get_cookie_params();
        setcookie(
            session_name(), '',
            time() - 42000,
            $params['path'],
            isset($params['domain']) ? $params['domain'] : '',
            $params['secure'],
            $params['httponly']
        );
    }
    session_destroy();
}

function idlabs_require_admin($loginPath = 'login.php')
{
    if (!idlabs_is_admin()) {
        header('Location: ' . $loginPath);
        exit;
    }
}

function idlabs_require_admin_api()
{
    if (!idlabs_is_admin()) {
        http_response_code(401);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(array('error' => 'Authentification requise'));
        exit;
    }
}
