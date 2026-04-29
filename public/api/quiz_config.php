<?php
require_once __DIR__ . '/../includes/db.php';
require_once __DIR__ . '/../includes/helpers.php';

idlabs_require_method('GET');

$pdo = idlabs_db();

$cats = $pdo->query(
    'SELECT id, name, icon, color, description, display_order
     FROM quiz_categories
     ORDER BY display_order ASC'
)->fetchAll();

$questionsByCat = array();
$qStmt = $pdo->query(
    'SELECT category_id, question_text
     FROM quiz_questions
     ORDER BY category_id, display_order ASC'
);
foreach ($qStmt as $row) {
    $questionsByCat[$row['category_id']][] = $row['question_text'];
}

$categories = array();
foreach ($cats as $c) {
    $categories[] = array(
        'id'        => $c['id'],
        'name'      => $c['name'],
        'icon'      => $c['icon'],
        'color'     => $c['color'],
        'desc'      => $c['description'],
        'questions' => isset($questionsByCat[$c['id']]) ? $questionsByCat[$c['id']] : array(),
    );
}

$levels = array();
$lStmt = $pdo->query(
    'SELECT score_min, score_max, name, emoji, color, title, description
     FROM quiz_levels
     ORDER BY display_order ASC'
);
foreach ($lStmt as $row) {
    $levels[] = array(
        'min'   => (int) $row['score_min'],
        'max'   => (int) $row['score_max'],
        'name'  => $row['name'],
        'emoji' => $row['emoji'],
        'color' => $row['color'],
        'title' => $row['title'],
        'desc'  => $row['description'],
    );
}

$recommendations = array();
$rStmt = $pdo->query(
    'SELECT category_id, max_score, tag, reco_text, trainer_id
     FROM quiz_recommendations
     ORDER BY category_id, display_order ASC'
);
foreach ($rStmt as $row) {
    $recommendations[$row['category_id']][] = array(
        'maxScore' => (int) $row['max_score'],
        'tag'      => $row['tag'],
        'text'     => $row['reco_text'],
        'trainer'  => $row['trainer_id'],
    );
}

idlabs_send_json(200, array(
    'categories'      => $categories,
    'levels'          => $levels,
    'recommendations' => $recommendations,
));
