<?php
declare(strict_types=1);

require_once __DIR__ . '/../includes/db.php';
require_once __DIR__ . '/../includes/helpers.php';

idlabs_require_method('POST');

$body = idlabs_read_json_body();

$lead = is_array($body['leadData'] ?? null) ? $body['leadData'] : [];

$prenom     = idlabs_str($lead['prenom'] ?? null, 120);
$nom        = idlabs_str($lead['nom'] ?? null, 120);
$email      = idlabs_email($lead['email'] ?? null);
$entreprise = idlabs_str($lead['entreprise'] ?? null, 255);
$secteur    = idlabs_str($lead['secteur'] ?? null, 80);
$taille     = idlabs_str($lead['taille'] ?? null, 40);
$fonction   = idlabs_str($lead['fonction'] ?? null, 255);

$finalScore       = isset($body['finalScore']) ? (int) $body['finalScore'] : -1;
$dimensionScores  = is_array($body['dimensionScores'] ?? null) ? $body['dimensionScores'] : [];
$answers          = is_array($body['answers'] ?? null) ? $body['answers'] : [];

if ($prenom === '' || $nom === '' || $email === null || $finalScore < 0 || $finalScore > 100) {
    idlabs_send_json(400, ['error' => 'Données quiz invalides']);
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
    $ins->execute([
        ':prenom'      => $prenom,
        ':nom'         => $nom,
        ':email'       => $email,
        ':entreprise'  => $entreprise !== '' ? $entreprise : null,
        ':secteur'     => $secteur !== ''    ? $secteur    : null,
        ':taille'      => $taille !== ''     ? $taille     : null,
        ':fonction'    => $fonction !== ''   ? $fonction   : null,
        ':final_score' => $finalScore,
        ':dim'         => json_encode($dimensionScores, JSON_UNESCAPED_UNICODE),
    ]);

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
            $insA->execute([
                ':rid' => $resultId,
                ':cat' => idlabs_str($a['categorie'] ?? '', 120),
                ':q'   => idlabs_str($a['question'] ?? '', 1000),
                ':r'   => isset($a['reponse']) && $a['reponse'] !== null ? (int) $a['reponse'] : null,
            ]);
        }
    }

    $pdo->commit();
} catch (Throwable $e) {
    $pdo->rollBack();
    idlabs_send_json(500, ['error' => 'Erreur lors de l\'enregistrement du quiz']);
}

idlabs_send_json(200, ['success' => true, 'id' => $resultId]);
