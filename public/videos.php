<?php


$pageTitle = 'Vidéos de démonstration - ID Labs';
$pageDesc  = 'ID Labs - Vidéos de nos formateurs IA';
$activeNav = 'videos';

require __DIR__ . '/includes/header.php';
?>
    <div class="container container-page">
        <h2 class="page-title">Vidéos de nos formateurs</h2>
        <p class="page-subtitle">
            Découvrez en images des cas d'usage concrets démontrés par nos experts &mdash;
            Claude, Gemini, Perplexity, n8n, NotebookLM et plus encore.
        </p>

        <div class="videos-grid" id="videosGrid">
            <div class="videos-loading">Chargement des vidéos&hellip;</div>
        </div>
    </div>

    <!-- Lightbox -->
    <div class="video-lightbox" id="videoLightbox" aria-hidden="true">
        <button class="video-lightbox-close" id="videoLightboxClose" aria-label="Fermer">&times;</button>
        <div class="video-lightbox-content">
            <video id="videoLightboxPlayer" controls playsinline preload="metadata"></video>
            <div class="video-lightbox-meta">
                <div class="video-lightbox-trainer" id="videoLightboxTrainer"></div>
                <div class="video-lightbox-title" id="videoLightboxTitle"></div>
                <div class="video-lightbox-desc" id="videoLightboxDesc"></div>
            </div>
        </div>
    </div>
<?php require __DIR__ . '/includes/footer.php'; ?>
