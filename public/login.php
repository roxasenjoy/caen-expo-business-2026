<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/auth.php';

idlabs_session_start();

if (idlabs_is_admin()) {
    header('Location: admin.php');
    exit;
}

$error = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_POST['csrf_token'], $_SESSION['csrf_token'])
        || !hash_equals($_SESSION['csrf_token'], (string) $_POST['csrf_token'])) {
        $error = 'Session expirée, veuillez réessayer.';
    } else {
        $code = isset($_POST['code']) ? (string) $_POST['code'] : '';
        // throttling minimal : pause 1 seconde sur tentative
        usleep(800000);
        if (idlabs_check_admin_code($code)) {
            idlabs_login_admin();
            header('Location: admin.php');
            exit;
        }
        $error = 'Code admin incorrect.';
    }
}

if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

$pageTitle = 'Accès administrateur - ID Labs';
$pageDesc  = 'Authentification ID Labs';
$activeNav = '';

require __DIR__ . '/includes/header.php';
?>
    <div class="container container-page">
        <div class="admin-panel" style="max-width:520px;margin:60px auto;">
            <h2 style="margin-bottom: 8px; color: #333;">Acc&egrave;s administrateur</h2>
            <p style="color:#888;font-size:14px;margin-bottom:24px;">
                Saisissez le code admin pour acc&eacute;der au panneau d'administration.
            </p>

            <?php if ($error !== null): ?>
                <div style="background:#fee2e2;border:1px solid #fca5a5;color:#991b1b;padding:12px 14px;border-radius:8px;margin-bottom:18px;font-size:14px;">
                    <?= htmlspecialchars($error, ENT_QUOTES, 'UTF-8') ?>
                </div>
            <?php endif; ?>

            <form method="POST" autocomplete="off">
                <input type="hidden" name="csrf_token" value="<?= htmlspecialchars($_SESSION['csrf_token'], ENT_QUOTES, 'UTF-8') ?>">

                <div class="form-group form-group-full" style="margin-bottom:20px;">
                    <label for="code" style="display:block;margin-bottom:6px;font-weight:600;color:#444;">Code admin</label>
                    <input
                        type="password"
                        id="code"
                        name="code"
                        required
                        autofocus
                        autocomplete="current-password"
                        spellcheck="false"
                        style="width:100%;padding:12px 14px;border:1px solid #d1d5db;border-radius:8px;font-size:15px;font-family:inherit;"
                        placeholder="Code transmis par votre administrateur">
                </div>

                <button type="submit" class="form-submit" style="width:100%;">
                    Acc&eacute;der au panneau admin
                </button>
            </form>

            <div style="margin-top:24px;text-align:center;">
                <a href="index.php" style="color:#2292cb;font-size:13px;text-decoration:none;">&larr; Retour &agrave; l'accueil</a>
            </div>
        </div>
    </div>
<?php require __DIR__ . '/includes/footer.php'; ?>
