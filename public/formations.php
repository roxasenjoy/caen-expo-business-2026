<?php


$pageTitle = 'Nos Formations IA - ID Labs';
$pageDesc  = 'ID Labs - Formations IA';
$activeNav = 'formations';

require __DIR__ . '/includes/header.php';
?>
    <div class="container container-page">
        <h2 class="page-title">Nos Formations IA</h2>
        <p class="page-subtitle">6 formations de 7h dispens&eacute;es par nos experts, 10 places par session &mdash; premier inscrit, premier servi. Sessions organis&eacute;es &agrave; Caen et ses alentours.</p>
        <div class="formation-grid" id="formationGrid"></div>
    </div>

    <div class="modal" id="registrationModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="modalFormTitle">Inscription</h2>
                <button class="close-modal" onclick="closeModal()">&times;</button>
            </div>
            <div id="modalBody"></div>
        </div>
    </div>
<?php require __DIR__ . '/includes/footer.php'; ?>
