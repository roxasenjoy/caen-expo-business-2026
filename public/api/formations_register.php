<?php
require_once __DIR__ . '/../includes/db.php';
require_once __DIR__ . '/../includes/helpers.php';

idlabs_require_method('POST');

$body = idlabs_read_json_body();

$sessionId  = idlabs_str(isset($body['sessionId'])  ? $body['sessionId']  : null, 60);
$nom        = idlabs_str(isset($body['nom'])         ? $body['nom']        : null, 120);
$prenom     = idlabs_str(isset($body['prenom'])      ? $body['prenom']     : null, 120);
$email      = idlabs_email(isset($body['email'])     ? $body['email']      : null);
$telephone  = idlabs_str(isset($body['telephone'])   ? $body['telephone']  : null, 50);
$entreprise = idlabs_str(isset($body['entreprise'])  ? $body['entreprise'] : null, 255);

if ($sessionId === '' || $nom === '' || $prenom === '' || $entreprise === '' || $email === null) {
    idlabs_send_json(400, array('error' => 'Champs obligatoires manquants ou invalides'));
}

$pdo = idlabs_db();

$stmt = $pdo->prepare('SELECT formation_id FROM formation_sessions WHERE id = :id LIMIT 1');
$stmt->execute(array(':id' => $sessionId));
$session = $stmt->fetch();
if (!$session) {
    idlabs_send_json(404, array('error' => 'Session introuvable'));
}

$ins = $pdo->prepare(
    'INSERT INTO formation_registrations
        (session_id, formation_id, nom, prenom, email, telephone, entreprise)
     VALUES
        (:session_id, :formation_id, :nom, :prenom, :email, :telephone, :entreprise)'
);
$ins->execute(array(
    ':session_id'   => $sessionId,
    ':formation_id' => $session['formation_id'],
    ':nom'          => $nom,
    ':prenom'       => $prenom,
    ':email'        => $email,
    ':telephone'    => $telephone !== '' ? $telephone : null,
    ':entreprise'   => $entreprise,
));

$count = (int) $pdo->query(
    'SELECT COUNT(*) FROM formation_registrations WHERE session_id = ' . $pdo->quote($sessionId)
)->fetchColumn();

idlabs_send_json(200, array(
    'success'   => true,
    'sessionId' => $sessionId,
    'inscrits'  => $count,
));
