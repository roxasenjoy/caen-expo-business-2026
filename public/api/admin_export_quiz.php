<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/db.php';

idlabs_require_admin('../login.php');

$pdo = idlabs_db();

$rows = $pdo->query(
    'SELECT prenom, nom, email, entreprise, secteur, taille, fonction,
            final_score, dimension_scores, created_at
     FROM quiz_results
     ORDER BY created_at DESC'
)->fetchAll();

header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename="quiz_resultats.csv"');
header('Cache-Control: no-store');

$out = fopen('php://output', 'w');
fwrite($out, "\xEF\xBB\xBF");

fputcsv($out, [
    'Prénom', 'Nom', 'Email', 'Entreprise', 'Secteur', 'Taille', 'Fonction',
    'Score final',
    'Score Stratégie', 'Score Données', 'Score Usages',
    'Score Compétences', 'Score Gouvernance', 'Score Potentiel',
    'Date'
], ';');

$dimKeys = ['strategie', 'donnees', 'usages', 'competences', 'gouvernance', 'potentiel'];

foreach ($rows as $r) {
    $dim = $r['dimension_scores'] ? json_decode($r['dimension_scores'], true) : [];
    $dimRow = [];
    foreach ($dimKeys as $k) {
        $dimRow[] = isset($dim[$k]) ? (int) $dim[$k] : '';
    }

    fputcsv($out, array_merge([
        $r['prenom'],
        $r['nom'],
        $r['email'],
        $r['entreprise'] ?? '',
        $r['secteur']    ?? '',
        $r['taille']     ?? '',
        $r['fonction']   ?? '',
        (int) $r['final_score'],
    ], $dimRow, [$r['created_at']]), ';');
}

fclose($out);
exit;
