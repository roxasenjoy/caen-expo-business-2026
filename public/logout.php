<?php


require_once __DIR__ . '/includes/auth.php';

idlabs_logout_admin();
header('Location: index.php');
exit;
