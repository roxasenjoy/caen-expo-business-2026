<?php
/**
 * Connexion PDO MySQL — singleton.
 */

require_once __DIR__ . '/config.php';

function idlabs_db()
{
    static $pdo = null;
    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $dsn = sprintf(
        'mysql:host=%s;port=%d;dbname=%s;charset=utf8mb4',
        DB_HOST,
        DB_PORT,
        DB_NAME
    );

    $options = array(
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8mb4' COLLATE 'utf8mb4_unicode_ci'",
    );

    try {
        $pdo = new PDO($dsn, DB_USER, DB_PASSWORD, $options);
    } catch (PDOException $e) {
        http_response_code(500);
        if (APP_ENV === 'development') {
            echo 'Erreur connexion BDD : ' . htmlspecialchars($e->getMessage(), ENT_QUOTES, 'UTF-8');
        } else {
            echo 'Erreur de connexion à la base de données.';
        }
        exit;
    }

    return $pdo;
}
