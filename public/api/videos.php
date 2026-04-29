<?php


require_once __DIR__ . '/../includes/db.php';
require_once __DIR__ . '/../includes/helpers.php';

idlabs_require_method('GET');

$pdo = idlabs_db();

$rows = $pdo->query(
    'SELECT v.id, v.trainer_id, v.title, v.tag, v.description,
            v.filename, v.mime_type, v.poster, v.display_order,
            f.trainer       AS trainer_name,
            f.photo         AS trainer_photo,
            f.avatar_color  AS trainer_color
     FROM videos v
     LEFT JOIN formations f ON f.id = v.trainer_id
     ORDER BY f.display_order ASC, v.display_order ASC'
)->fetchAll();

$videos = [];
foreach ($rows as $r) {
    $videos[] = [
        'id'           => (int) $r['id'],
        'trainerId'    => $r['trainer_id'],
        'trainerName'  => $r['trainer_name'],
        'trainerPhoto' => $r['trainer_photo'],
        'trainerColor' => $r['trainer_color'],
        'title'        => $r['title'],
        'tag'          => $r['tag'],
        'description'  => $r['description'],
        'src'          => 'videos/' . $r['filename'],
        'mimeType'     => $r['mime_type'],
        'poster'       => $r['poster'],
    ];
}

idlabs_send_json(200, ['videos' => $videos]);
