<?php
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/db.php';

idlabs_require_admin('../login.php');

$pdo = idlabs_db();

$rows = $pdo->query(
    'SELECT f.title       AS formation,
            f.trainer     AS formateur,
            s.label       AS session_label,
            r.nom, r.prenom, r.email, r.telephone, r.entreprise,
            r.created_at
     FROM formation_registrations r
     JOIN formation_sessions s   ON s.id = r.session_id
     JOIN formations f           ON f.id = r.formation_id
     ORDER BY r.created_at DESC'
)->fetchAll();

header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename="formations_inscriptions.csv"');
header('Cache-Control: no-store');

$out = fopen('php://output', 'w');
fwrite($out, "\xEF\xBB\xBF");

fputcsv($out, array(
    'Formation', 'Formateur', 'Session',
    'Nom', 'Prénom', 'Email', 'Téléphone', 'Entreprise',
    'Date inscription'
), ';');

foreach ($rows as $r) {
    fputcsv($out, array(
        $r['formation'],
        $r['formateur'],
        $r['session_label'],
        $r['nom'],
        $r['prenom'],
        $r['email'],
        isset($r['telephone']) ? $r['telephone'] : '',
        $r['entreprise'],
        $r['created_at'],
    ), ';');
}

fclose($out);
exit;
