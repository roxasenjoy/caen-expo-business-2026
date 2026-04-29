<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/auth.php';
require_once __DIR__ . '/includes/db.php';

idlabs_require_admin();

$pdo = idlabs_db();

// ---- Traitement du formulaire de changement de code admin -------------
$pwMessage = null;
$pwError   = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST' && (($_POST['action'] ?? '') === 'change_password')) {
    if (empty($_POST['csrf_token']) || empty($_SESSION['csrf_token'])
        || !hash_equals((string) $_SESSION['csrf_token'], (string) $_POST['csrf_token'])) {
        $pwError = 'Session expirée, veuillez réessayer.';
    } else {
        $current = (string) ($_POST['current'] ?? '');
        $new1    = (string) ($_POST['new1']    ?? '');
        $new2    = (string) ($_POST['new2']    ?? '');

        if (!idlabs_check_admin_code($current)) {
            usleep(700000);
            $pwError = 'Code admin actuel incorrect.';
        } elseif (mb_strlen($new1) < 12) {
            $pwError = 'Le nouveau code doit contenir au moins 12 caractères.';
        } elseif ($new1 !== $new2) {
            $pwError = 'Les deux nouveaux codes ne correspondent pas.';
        } else {
            try {
                idlabs_admin_hash_set($new1);
                $pwMessage = 'Code admin mis à jour avec succès. Le hash bcrypt est désormais en BDD.';
            } catch (Throwable $e) {
                $pwError = 'Erreur lors de la mise à jour du code.';
            }
        }
    }
}

if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// ---- Statistiques globales --------------------------------------------
$quizCount = (int) $pdo->query('SELECT COUNT(*) FROM quiz_results')->fetchColumn();
$regCount  = (int) $pdo->query('SELECT COUNT(*) FROM formation_registrations')->fetchColumn();

// ---- Liste des formations + sessions + nombre d'inscrits --------------
$formations = $pdo->query(
    'SELECT id, trainer, tag, title FROM formations ORDER BY display_order ASC'
)->fetchAll();

$sessionsByFormation = [];
$stmt = $pdo->query(
    'SELECT s.id, s.formation_id, s.label, s.capacity,
            (SELECT COUNT(*) FROM formation_registrations r WHERE r.session_id = s.id) AS inscrits
     FROM formation_sessions s
     ORDER BY s.formation_id, s.display_order ASC'
);
foreach ($stmt as $row) {
    $sessionsByFormation[$row['formation_id']][] = $row;
}

$pageTitle = 'Admin Panel - ID Labs';
$pageDesc  = 'ID Labs - Admin Panel';
$activeNav = '';

require __DIR__ . '/includes/header.php';
?>
    <div class="container container-page">
        <div class="admin-panel">
            <h2 style="margin-bottom: 8px; color: #333;">Panneau Admin</h2>
            <p style="color:#888;font-size:13px;margin-bottom:28px;">
                Connect&eacute; en mode administrateur &middot;
                <a href="logout.php" style="color:#ef4444;">Se d&eacute;connecter</a>
            </p>

            <div class="admin-section">
                <h3>Statistiques globales</h3>
                <div class="admin-stats">
                    <div class="stat-box">
                        <div class="stat-number"><?= $quizCount ?></div>
                        <div class="stat-label">Quiz Compl&eacute;t&eacute;s</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-number"><?= $regCount ?></div>
                        <div class="stat-label">Inscriptions Formations</div>
                    </div>
                </div>
            </div>

            <div class="admin-section">
                <h3>Inscriptions par session</h3>
                <div class="formation-list" id="adminFormationList">
                    <?php foreach ($formations as $f): ?>
                        <div style="margin-bottom: 16px;">
                            <div class="formation-stat">
                                <div class="formation-stat-name" style="font-weight: 700;">
                                    <?= htmlspecialchars($f['trainer'], ENT_QUOTES, 'UTF-8') ?>
                                    &mdash; <?= htmlspecialchars($f['tag'] ?? '', ENT_QUOTES, 'UTF-8') ?>
                                </div>
                            </div>
                            <?php foreach ($sessionsByFormation[$f['id']] ?? [] as $s): ?>
                                <div class="formation-stat" style="margin-left: 16px;">
                                    <div class="formation-stat-name" style="font-size: 13px; color: #666;">
                                        <?= htmlspecialchars($s['label'], ENT_QUOTES, 'UTF-8') ?>
                                    </div>
                                    <div class="formation-stat-count">
                                        <?= (int) $s['inscrits'] ?> / <?= (int) $s['capacity'] ?>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <div class="admin-section">
                <h3>Export des donn&eacute;es</h3>
                <p style="color:#888;font-size:13px;margin-bottom:18px;">
                    Fichiers CSV (UTF-8 avec BOM, s&eacute;parateur point-virgule) compatibles Excel et Numbers.
                </p>
                <div class="export-grid">

                    <a href="api/admin_export_formations.php" class="export-card export-card--blue">
                        <div class="export-card-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <polyline points="14 2 14 8 20 8"/>
                                <line x1="16" y1="13" x2="8" y2="13"/>
                                <line x1="16" y1="17" x2="8" y2="17"/>
                                <polyline points="10 9 9 9 8 9"/>
                            </svg>
                        </div>
                        <div class="export-card-info">
                            <div class="export-card-eyebrow">Inscriptions</div>
                            <div class="export-card-title">Formations IA</div>
                            <div class="export-card-meta">
                                <span class="export-card-count"><?= $regCount ?></span>
                                <span class="export-card-unit">inscrit<?= $regCount > 1 ? 's' : '' ?></span>
                            </div>
                        </div>
                        <div class="export-card-cta">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7 10 12 15 17 10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                            <span>T&eacute;l&eacute;charger CSV</span>
                        </div>
                    </a>

                    <a href="api/admin_export_quiz.php" class="export-card export-card--purple">
                        <div class="export-card-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                                <line x1="7"  y1="17" x2="7"  y2="11"/>
                                <line x1="12" y1="17" x2="12" y2="7"/>
                                <line x1="17" y1="17" x2="17" y2="13"/>
                            </svg>
                        </div>
                        <div class="export-card-info">
                            <div class="export-card-eyebrow">R&eacute;sultats</div>
                            <div class="export-card-title">Diagnostics Quiz IA</div>
                            <div class="export-card-meta">
                                <span class="export-card-count"><?= $quizCount ?></span>
                                <span class="export-card-unit">quiz compl&eacute;t&eacute;<?= $quizCount > 1 ? 's' : '' ?></span>
                            </div>
                        </div>
                        <div class="export-card-cta">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7 10 12 15 17 10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                            <span>T&eacute;l&eacute;charger CSV</span>
                        </div>
                    </a>

                </div>
            </div>

            <div class="admin-section">
                <h3>S&eacute;curit&eacute; &mdash; Code admin</h3>
                <p style="color:#888;font-size:13px;margin-bottom:18px;">
                    Le code admin est stock&eacute; en BDD sous forme de hash bcrypt (co&ucirc;t 12).
                    Le changer le rend imm&eacute;diatement actif &mdash; le code .env n'est plus utilis&eacute; ensuite.
                </p>

                <?php if ($pwMessage !== null): ?>
                    <div class="admin-alert admin-alert--success">
                        <?= htmlspecialchars($pwMessage, ENT_QUOTES, 'UTF-8') ?>
                    </div>
                <?php endif; ?>
                <?php if ($pwError !== null): ?>
                    <div class="admin-alert admin-alert--error">
                        <?= htmlspecialchars($pwError, ENT_QUOTES, 'UTF-8') ?>
                    </div>
                <?php endif; ?>

                <form method="POST" autocomplete="off" class="admin-pw-form">
                    <input type="hidden" name="action" value="change_password">
                    <input type="hidden" name="csrf_token" value="<?= htmlspecialchars($_SESSION['csrf_token'], ENT_QUOTES, 'UTF-8') ?>">

                    <div class="admin-pw-grid">
                        <div class="admin-pw-field">
                            <label for="current">Code admin actuel</label>
                            <input id="current" type="password" name="current" required autocomplete="current-password" spellcheck="false">
                        </div>
                        <div class="admin-pw-field">
                            <label for="new1">Nouveau code (12 car. min.)</label>
                            <input id="new1" type="password" name="new1" required minlength="12" autocomplete="new-password" spellcheck="false">
                        </div>
                        <div class="admin-pw-field">
                            <label for="new2">Confirmer le nouveau code</label>
                            <input id="new2" type="password" name="new2" required minlength="12" autocomplete="new-password" spellcheck="false">
                        </div>
                    </div>

                    <button type="submit" class="admin-pw-submit">Mettre &agrave; jour le code admin</button>
                </form>
            </div>

            <div class="admin-section">
                <h3>Acc&egrave;s technique</h3>
                <p style="font-size: 13px; color: #888; line-height:1.6;">
                    &middot; Application web : <code>http://localhost:9000</code><br>
                    &middot; Base de donn&eacute;es MySQL : <code>localhost:9090</code><br>
                    &middot; phpMyAdmin : <code><a href="http://localhost:9091" target="_blank" rel="noopener">http://localhost:9091</a></code>
                </p>
            </div>

            <div style="margin-top: 20px;">
                <a href="index.php" class="cta-btn secondary" style="width: 100%; display: block; text-align: center; padding: 12px 24px;">&larr; Retour</a>
            </div>
        </div>
    </div>
<?php require __DIR__ . '/includes/footer.php'; ?>
