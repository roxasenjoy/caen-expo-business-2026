<?php
/**
 * Configuration centrale — lit les variables d'environnement injectées
 * par docker-compose et expose les constantes de l'application.
 */

declare(strict_types=1);

if (!function_exists('idlabs_env')) {
    function idlabs_env(string $key, ?string $default = null): ?string
    {
        $val = getenv($key);
        if ($val === false || $val === '') {
            return $default;
        }
        return $val;
    }
}

define('DB_HOST',     idlabs_env('DB_HOST',     'db'));
define('DB_PORT',     (int) idlabs_env('DB_PORT', '3306'));
define('DB_NAME',     idlabs_env('DB_NAME',     'idlabs'));
define('DB_USER',     idlabs_env('DB_USER',     'idlabs_app'));
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
