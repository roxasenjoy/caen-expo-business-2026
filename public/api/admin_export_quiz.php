<?php
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

fputcsv($out, array(
    'Prénom', 'Nom', 'Email', 'Entreprise', 'Secteur', 'Taille', 'Fonction',
    'Score final',
    'Score Stratégie', 'Score Données', 'Score Usages',
    'Score Compétences', 'Score Gouvernance', 'Score Potentiel',
    'Date'
), ';');

$dimKeys = array('strategie', 'donnees', 'usages', 'competences', 'gouvernance', 'potentiel');

foreach ($rows as $r) {
    $dim = $r['dimension_scores'] ? json_decode($r['dimension_scores'], true) : array();
    $dimRow = array();
    foreach ($dimKeys as $k) {
        $dimRow[] = isset($dim[$k]) ? (int) $dim[$k] : '';
    }

    fputcsv($out, array_merge(array(
        $r['prenom'],
        $r['nom'],
        $r['email'],
        isset($r['entreprise']) ? $r['entreprise'] : '',
        isset($r['secteur'])    ? $r['secteur']    : '',
        isset($r['taille'])     ? $r['taille']     : '',
        isset($r['fonction'])   ? $r['fonction']   : '',
        (int) $r['final_score'],
    ), $dimRow, array($r['created_at'])), ';');
}

fclose($out);
exit;
