<?php
require_once __DIR__ . '/password_compat.php';

// Lecture du .env à la racine si SetEnv Apache ne fonctionne pas
$_envFile = realpath(__DIR__ . '/../../.env');
if ($_envFile && file_exists($_envFile)) {
    $lines = file($_envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $_line) {
        if (strpos(trim($_line), '#') === 0) continue;
        if (strpos($_line, '=') === false) continue;
        $parts = explode('=', $_line, 2);
        $_key = trim($parts[0]);
        $_val = trim($parts[1]);
        if (!empty($_key) && getenv($_key) === false) {
            putenv($_key . '=' . $_val);
        }
    }
    unset($lines, $_line, $parts, $_key, $_val);
}
unset($_envFile);

if (!function_exists('idlabs_env')) {
    function idlabs_env($key, $default = null) {
        $val = getenv($key);
        if ($val === false || $val === '') {
            return $default;
        }
        return $val;
    }
}

define('DB_HOST',     idlabs_env('DB_HOST',     'localhost'));
define('DB_PORT',     (int) idlabs_env('DB_PORT', '3306'));
define('DB_NAME',     idlabs_env('DB_NAME',     ''));
define('DB_USER',     idlabs_env('DB_USER',     ''));
define('DB_PASSWORD', idlabs_env('DB_PASSWORD', ''));

define('SESSION_SECRET',  idlabs_env('SESSION_SECRET',  'change-me'));
define('APP_ENV',         idlabs_env('APP_ENV',         'production'));

if (APP_ENV !== 'development') {
    error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED);
    ini_set('display_errors', '0');
} else {
    error_reporting(E_ALL);
    ini_set('display_errors', '1');
}
