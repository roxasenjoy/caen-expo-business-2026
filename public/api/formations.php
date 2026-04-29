<?php
require_once __DIR__ . '/../includes/db.php';
require_once __DIR__ . '/../includes/helpers.php';

idlabs_require_method('GET');

$pdo = idlabs_db();

$formations = $pdo->query(
    'SELECT id, trainer, initials, avatar_color, photo, tag, title, resume,
            objectifs, bio, tarif_salon, tarif_normal, tarif, lien
     FROM formations
     ORDER BY display_order ASC'
)->fetchAll();

$sessionsRaw = $pdo->query(
    'SELECT s.id, s.formation_id, s.label, s.session_date, s.lieu, s.salle, s.capacity,
            (SELECT COUNT(*) FROM formation_registrations r WHERE r.session_id = s.id) AS inscrits
     FROM formation_sessions s
     ORDER BY s.formation_id, s.display_order ASC'
)->fetchAll();

$sessionsByFormation = array();
foreach ($sessionsRaw as $row) {
    $sessionsByFormation[$row['formation_id']][] = array(
        'id'        => $row['id'],
        'label'     => $row['label'],
        'date'      => $row['session_date'],
        'lieu'      => $row['lieu'],
        'salle'     => $row['salle'],
        'capacity'  => (int) $row['capacity'],
        'inscrits'  => (int) $row['inscrits'],
    );
}

$out = array();
foreach ($formations as $f) {
    $objectifs = $f['objectifs'] ? json_decode($f['objectifs'], true) : array();
    $out[] = array(
        'id'           => $f['id'],
        'trainer'      => $f['trainer'],
        'initials'     => $f['initials'],
        'avatarColor'  => $f['avatar_color'],
        'photo'        => $f['photo'],
        'tag'          => $f['tag'],
        'title'        => $f['title'],
        'resume'       => $f['resume'],
        'objectifs'    => is_array($objectifs) ? $objectifs : array(),
        'bio'          => isset($f['bio'])         ? $f['bio']         : '',
        'tarifSalon'   => isset($f['tarif_salon']) ? $f['tarif_salon'] : '',
        'tarifNormal'  => isset($f['tarif_normal'])? $f['tarif_normal']: '',
        'tarif'        => isset($f['tarif'])       ? $f['tarif']       : '',
        'lien'         => isset($f['lien'])        ? $f['lien']        : '',
        'sessions'     => isset($sessionsByFormation[$f['id']]) ? $sessionsByFormation[$f['id']] : array(),
    );
}

idlabs_send_json(200, array('formations' => $out));
