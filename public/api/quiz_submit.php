<?php
require_once __DIR__ . '/../includes/db.php';
require_once __DIR__ . '/../includes/helpers.php';

idlabs_require_method('POST');

$body = idlabs_read_json_body();

$lead = (isset($body['leadData']) && is_array($body['leadData'])) ? $body['leadData'] : array();

$prenom     = idlabs_str(isset($lead['prenom'])     ? $lead['prenom']     : null, 120);
$nom        = idlabs_str(isset($lead['nom'])         ? $lead['nom']        : null, 120);
$email      = idlabs_email(isset($lead['email'])     ? $lead['email']      : null);
$entreprise = idlabs_str(isset($lead['entreprise'])  ? $lead['entreprise'] : null, 255);
$secteur    = idlabs_str(isset($lead['secteur'])     ? $lead['secteur']    : null, 80);
$taille     = idlabs_str(isset($lead['taille'])      ? $lead['taille']     : null, 40);
$fonction   = idlabs_str(isset($lead['fonction'])    ? $lead['fonction']   : null, 255);

$finalScore      = isset($body['finalScore'])      ? (int) $body['finalScore']      : -1;
$dimensionScores = (isset($body['dimensionScores']) && is_array($body['dimensionScores'])) ? $body['dimensionScores'] : array();
$answers         = (isset($body['answers'])         && is_array($body['answers']))         ? $body['answers']         : array();

if ($prenom === '' || $nom === '' || $email === null || $finalScore < 0 || $finalScore > 100) {
    idlabs_send_json(400, array('error' => 'Données quiz invalides'));
}

$pdo = idlabs_db();
$pdo->beginTransaction();

try {
    $ins = $pdo->prepare(
        'INSERT INTO quiz_results
            (prenom, nom, email, entreprise, secteur, taille, fonction, final_score, dimension_scores)
         VALUES
            (:prenom, :nom, :email, :entreprise, :secteur, :taille, :fonction, :final_score, :dim)'
    );
    $ins->execute(array(
        ':prenom'      => $prenom,
        ':nom'         => $nom,
        ':email'       => $email,
        ':entreprise'  => $entreprise !== '' ? $entreprise : null,
        ':secteur'     => $secteur    !== '' ? $secteur    : null,
        ':taille'      => $taille     !== '' ? $taille     : null,
        ':fonction'    => $fonction   !== '' ? $fonction   : null,
        ':final_score' => $finalScore,
        ':dim'         => json_encode($dimensionScores, JSON_UNESCAPED_UNICODE),
    ));

    $resultId = (int) $pdo->lastInsertId();

    if (!empty($answers)) {
        $insA = $pdo->prepare(
            'INSERT INTO quiz_answers (quiz_result_id, categorie, question, reponse)
             VALUES (:rid, :cat, :q, :r)'
        );
        foreach ($answers as $a) {
            if (!is_array($a)) {
                continue;
            }
            $insA->execute(array(
                ':rid' => $resultId,
                ':cat' => idlabs_str(isset($a['categorie']) ? $a['categorie'] : '', 120),
                ':q'   => idlabs_str(isset($a['question'])  ? $a['question']  : '', 1000),
                ':r'   => (isset($a['reponse']) && $a['reponse'] !== null) ? (int) $a['reponse'] : null,
            ));
        }
    }

    $pdo->commit();
} catch (Exception $e) {
    $pdo->rollBack();
    idlabs_send_json(500, array('error' => 'Erreur lors de l\'enregistrement du quiz'));
}

idlabs_send_json(200, array('success' => true, 'id' => $resultId));
