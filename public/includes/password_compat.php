<?php
// Polyfills pour PHP 5.4 : password_hash / password_verify / hash_equals

if (!defined('PASSWORD_BCRYPT')) {
    define('PASSWORD_BCRYPT', 1);
}

if (!function_exists('password_hash')) {
    function password_hash($password, $algo, $options = array()) {
        $cost = isset($options['cost']) ? (int) $options['cost'] : 10;
        $salt = '$2y$' . str_pad($cost, 2, '0', STR_PAD_LEFT) . '$';
        $salt .= substr(strtr(base64_encode(openssl_random_pseudo_bytes(16)), '+', '.'), 0, 22);
        return crypt($password, $salt);
    }
}

if (!function_exists('password_verify')) {
    function password_verify($password, $hash) {
        $ret = crypt($password, $hash);
        if (!is_string($ret) || strlen($ret) !== strlen($hash) || strlen($ret) <= 13) {
            return false;
        }
        $status = 0;
        for ($i = 0; $i < strlen($ret); $i++) {
            $status |= (ord($ret[$i]) ^ ord($hash[$i]));
        }
        return $status === 0;
    }
}

if (!function_exists('password_needs_rehash')) {
    function password_needs_rehash($hash, $algo, $options = array()) {
        return false;
    }
}

if (!function_exists('hash_equals')) {
    function hash_equals($known, $user) {
        if (!is_string($known) || !is_string($user)) {
            return false;
        }
        $len = strlen($known);
        if ($len !== strlen($user)) {
            return false;
        }
        $status = 0;
        for ($i = 0; $i < $len; $i++) {
            $status |= (ord($known[$i]) ^ ord($user[$i]));
        }
        return $status === 0;
    }
}
