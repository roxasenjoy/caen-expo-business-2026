<?php


$pageTitle = 'Diagnostic Maturité IA - ID Labs';
$pageDesc  = 'ID Labs - Quiz IA';
$activeNav = 'quiz';

require __DIR__ . '/includes/header.php';
?>
    <div class="container container-page">
        <div class="quiz-page">
            <div class="cia-onboarding" id="quizLeadForm">

                <div class="cia-step active" id="ciaStep0">
                    <div class="cia-badge">C&middot;I&middot;A</div>
                    <div class="cia-label">Cabinet d'Intelligence Artificielle</div>
                    <h2 class="cia-question">Votre dossier de maturit&eacute; IA<br>est en cours d'ouverture.</h2>
                    <p class="cia-hint">Diagnostic confidentiel &middot; 25 questions &middot; ~5 min</p>
                    <button class="cia-btn" onclick="ciaNext(0)">Entrer dans la salle d'interrogatoire</button>
                </div>

                <div class="cia-step" id="ciaStep1">
                    <div class="cia-step-num">IDENTIFICATION &mdash; 01 / 04</div>
                    <p class="cia-sentence">
                        Je m'appelle
                        <input class="cia-inline-input" id="leadPrenom" placeholder="prénom" autocomplete="given-name" spellcheck="false">
                        <input class="cia-inline-input" id="leadNom" placeholder="nom" autocomplete="family-name" spellcheck="false">
                    </p>
                    <button class="cia-btn" onclick="ciaNext(1)">Confirmer mon identit&eacute;</button>
                </div>

                <div class="cia-step" id="ciaStep2">
                    <div class="cia-step-num">COUVERTURE &mdash; 02 / 04</div>
                    <p class="cia-sentence">
                        Agent <span id="ciaAgentName" class="cia-filled"></span>,
                        je repr&eacute;sente
                        <input class="cia-inline-input" id="leadEntreprise" placeholder="organisation" autocomplete="organization" spellcheck="false">
                        en tant que
                        <input class="cia-inline-input" id="leadFonction" placeholder="votre fonction" spellcheck="false">
                    </p>
                    <button class="cia-btn" onclick="ciaNext(2)">Valider mon dossier</button>
                </div>

                <div class="cia-step" id="ciaStep3">
                    <div class="cia-step-num">PROFILAGE &mdash; 03 / 04</div>
                    <p class="cia-sentence cia-sentence--sm">
                        La cellule <span id="ciaOrgName" class="cia-filled">votre organisation</span>
                        op&egrave;re dans le secteur
                        <select class="cia-select" id="leadSecteur">
                            <option value="">[ secteur ]</option>
                            <option value="artisans">Artisans</option>
                            <option value="assurances">Assurances</option>
                            <option value="banque">Banque</option>
                            <option value="chr">CHR</option>
                            <option value="commercants">Commerçants</option>
                            <option value="communication">Communication</option>
                            <option value="conseil">Conseil</option>
                            <option value="culture">Culture</option>
                            <option value="evenementiel">Événementiel</option>
                            <option value="finances">Finances</option>
                            <option value="formation">Formation</option>
                            <option value="immobilier">Immobilier</option>
                            <option value="juridique">Juridique</option>
                            <option value="medias">Médias</option>
                            <option value="rh">RH</option>
                            <option value="services-entreprises">Services aux entreprises</option>
                            <option value="tech">Tech / Numérique</option>
                            <option value="autres">Autres</option>
                        </select>
                        et mobilise
                        <select class="cia-select" id="leadTaille">
                            <option value="">[ effectif ]</option>
                            <option value="1-10">1 à 10 agents</option>
                            <option value="11-50">11 à 50 agents</option>
                            <option value="51-200">51 à 200 agents</option>
                            <option value="201-1000">201 à 1000 agents</option>
                            <option value="1000+">plus de 1000 agents</option>
                        </select>
                        sur le terrain.
                    </p>
                    <button class="cia-btn" onclick="ciaNext(3)">Continuer</button>
                </div>

                <div class="cia-step" id="ciaStep4">
                    <div class="cia-step-num">TRANSMISSION &mdash; 04 / 04</div>
                    <p class="cia-sentence">
                        Envoyez mon rapport classifi&eacute; &agrave;
                        <input class="cia-inline-input cia-inline-input--email" id="leadEmail" type="email" placeholder="votre@email.com" autocomplete="email" spellcheck="false">
                    </p>
                    <button class="cia-btn" id="startQuizBtn" onclick="ciaNext(4)">Lancer le diagnostic &#9889;</button>
                </div>

            </div>

            <div id="quizArena" style="display:none;">
                <div class="qa-inner">
                    <div class="qa-topbar">
                        <div class="qa-cats" id="qaCategoryProgress"></div>
                        <div class="qa-progress-track">
                            <div class="qa-progress-fill" id="progressFill"></div>
                        </div>
                    </div>
                    <div class="qa-card" id="questionCard">
                        <div class="qa-card-meta">
                            <div class="qa-category" id="qaCategoryChip">
                                <div class="qa-category-icon" id="qaCategoryIcon"></div>
                                <div class="qa-category-text">
                                    <span class="qa-category-label">Interrogatoire en cours</span>
                                    <span class="qa-category-name" id="qaCategoryName"></span>
                                </div>
                            </div>
                            <div class="qa-counter">
                                <span class="qa-counter-label">Indice</span>
                                <span class="qa-counter-value" id="questionCounter">Q-01 / 25</span>
                            </div>
                        </div>
                        <div class="qa-mission-label" id="qaMissionLabel"></div>
                        <p class="qa-question" id="questionText"></p>
                        <div class="qa-answers" id="answerButtons"></div>
                    </div>
                </div>
            </div>

            <div class="results-page" id="resultsPage" style="display: none;">

                <div class="rp-hero">
                    <div class="rp-hero-top">
                        <div class="rp-report-label">Rapport de Maturit&eacute; IA &middot; ID Labs</div>
                        <div class="rp-report-date" id="rpDate"></div>
                    </div>
                    <div class="rp-hero-body">
                        <div class="rp-arc-wrapper">
                            <div id="scoreRing"></div>
                            <div class="rp-arc-center">
                                <div class="rp-arc-score" id="rpScoreNum">0</div>
                                <div class="rp-arc-total">/100</div>
                            </div>
                        </div>
                        <div class="rp-hero-info">
                            <div class="rp-hero-name" id="resultName"></div>
                            <div class="rp-hero-company" id="rpCompany"></div>
                            <div class="rp-level-pill" id="levelName"></div>
                            <div class="rp-level-title" id="levelTitle"></div>
                            <div class="rp-level-desc" id="levelDesc"></div>
                        </div>
                    </div>
                </div>

                <div class="rp-kpi-section">
                    <div class="rp-section-label">Performance par dimension</div>
                    <div class="rp-kpi-grid" id="dimensionScores"></div>
                </div>

                <div class="recos-section">
                    <div class="recos-title">Plan d'action &mdash; priorit&eacute; par axe</div>
                    <div class="recos-grid" id="recosGrid"></div>
                </div>

                <div class="results-nav">
                    <a href="index.php" class="back-home">&larr; Accueil</a>
                </div>
            </div>
        </div>
    </div>

    <button class="qa-quit-btn" id="qaQuitBtn" style="display:none" onclick="if(confirm('Abandonner le diagnostic et revenir &agrave; l\'accueil ?')) window.location.href='index.php'">Abandonner</button>
<?php require __DIR__ . '/includes/footer.php'; ?>
