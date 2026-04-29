        // ===============================================================
        // ID Labs — Frontend (PHP backend)
        // Les formations/sessions sont chargées depuis /api/formations.php
        // Les inscriptions et résultats du quiz sont POSTés vers l'API.
        // ===============================================================

        // ===== STATE =====
        let FORMATIONS = [];          // Rempli par loadFormations() au démarrage
        let logoClickCount = 0;
        let logoClickTimer = null;

        let quizState = {
            leadData: {},
            currentCategory: 0,
            answers: {},
            xp: 0,
            totalQuestions: 0,
            allQuestions: []
        };

        // ===== API HELPERS =====
        async function apiGet(path) {
            const res = await fetch(path, { headers: { 'Accept': 'application/json' } });
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
        }

        async function apiPost(path, payload) {
            const res = await fetch(path, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                const msg = data && data.error ? data.error : ('HTTP ' + res.status);
                throw new Error(msg);
            }
            return data;
        }

        async function loadFormations() {
            try {
                const data = await apiGet('api/formations.php');
                FORMATIONS = (data && data.formations) || [];
            } catch (e) {
                console.error('Impossible de charger les formations :', e.message);
                FORMATIONS = [];
            }
        }

        // ===== QUIZ CONFIGURATION (chargée depuis /api/quiz_config.php) =====
        let QUIZ_CATEGORIES = [];
        let QUIZ_LEVELS = [];
        let RECOMMENDATIONS = {};

        async function loadQuizConfig() {
            try {
                const data = await apiGet('api/quiz_config.php');
                QUIZ_CATEGORIES = (data && data.categories) || [];
                QUIZ_LEVELS     = (data && data.levels)     || [];
                RECOMMENDATIONS = (data && data.recommendations) || {};
            } catch (e) {
                console.error('Impossible de charger la config quiz :', e.message);
                QUIZ_CATEGORIES = [];
                QUIZ_LEVELS     = [];
                RECOMMENDATIONS = {};
            }
        }


        function buildPersonalAnalysis(dimensionScores, finalScore, leadData) {
            const catInsights = {
                strategie:   { low: 'la vision stratégique IA reste à formaliser',          mid: 'la stratégie IA est en cours de structuration', high: 'la direction est alignée sur les enjeux IA' },
                donnees:     { low: 'les données sont insuffisamment structurées pour l\'IA', mid: 'l\'infrastructure data est en développement',   high: 'les fondations data sont solides et exploitables' },
                usages:      { low: 'les usages IA concrets sont encore très limités',       mid: 'les usages IA émergent mais restent épars',     high: 'l\'IA est déjà opérationnelle dans vos processus' },
                competences: { low: 'la culture IA n\'est pas encore ancrée dans les équipes', mid: 'les compétences IA se développent progressivement', high: 'les équipes sont compétentes et engagées sur l\'IA' },
                gouvernance: { low: 'la gouvernance IA est absente ou informelle',           mid: 'le cadre de gouvernance est en cours de formalisation', high: 'le dispositif de gouvernance IA est maîtrisé' },
                potentiel:   { low: 'le potentiel d\'accélération n\'est pas encore activé', mid: 'l\'ambition IA est présente mais reste à mobiliser',   high: 'l\'organisation est prête à accélérer fortement' }
            };

            const tier = s => s < 40 ? 'low' : s < 70 ? 'mid' : 'high';

            const sorted = QUIZ_CATEGORIES
                .map(cat => ({ cat, score: dimensionScores[cat.id] || 0 }))
                .sort((a, b) => b.score - a.score);

            const strengths = sorted.filter(d => d.score >= 60).slice(0, 2);
            const gaps = sorted.filter(d => d.score < 60).slice(-2).reverse();

            let analysis = '';

            const strengthNames = strengths.map(d => `<strong>${d.cat.name}</strong>`).join(' et ');
            const gapNames = gaps.map(d => `<strong>${d.cat.name}</strong>`).join(' et ');
            const strengthInsights = strengths.map(d => catInsights[d.cat.id][tier(d.score)]).join(' et ');
            const gapInsights = gaps.map(d => catInsights[d.cat.id][tier(d.score)]).join(', ');

            if (finalScore < 30) {
                analysis += `<strong>${leadData.prenom}</strong>, votre organisation en est aux prémices de sa transformation IA. Les bases sont encore à poser sur l'ensemble des dimensions — c'est précisément le bon moment pour structurer une démarche cohérente et éviter les erreurs coûteuses.`;
            } else if (finalScore < 55) {
                analysis += `<strong>${leadData.prenom}</strong>, votre organisation a initié sa transition IA mais la démarche reste fragmentée. Des avancées réelles existent sur certains axes, mais des lacunes structurelles freinent encore le passage à l'échelle.`;
            } else if (finalScore < 75) {
                analysis += `<strong>${leadData.prenom}</strong>, votre maturité IA est en bonne progression. Des usages sont en production et la dynamique est engagée — l'enjeu est désormais de structurer pour industrialiser et maximiser l'impact.`;
            } else {
                analysis += `<strong>${leadData.prenom}</strong>, votre organisation affiche une maturité IA avancée, avec une démarche structurée, des équipes compétentes et des usages à impact réel.`;
            }

            if (strengths.length > 0) {
                analysis += ` Vos points forts se situent en ${strengthNames} — ${strengthInsights}.`;
            }
            if (gaps.length > 0) {
                analysis += ` En revanche, ${gapNames} ${gaps.length > 1 ? 'constituent vos axes' : 'constitue votre axe'} prioritaire${gaps.length > 1 ? 's' : ''} : ${gapInsights}. Les formations ID Labs ci-dessous sont sélectionnées pour répondre précisément à ces besoins.`;
            } else {
                analysis += ` Les formations ID Labs ci-dessous vous permettront d'aller encore plus loin sur vos axes d'excellence.`;
            }

            return analysis;
        }

        // ===== PAGE DETECTION =====
        function detectCurrentPage() {
            if (document.getElementById('formationGrid'))      return 'formations';
            if (document.getElementById('quizLeadForm'))       return 'quiz';
            if (document.getElementById('adminFormationList')) return 'admin';
            if (document.getElementById('videosGrid'))         return 'videos';
            return 'landing';
        }

        // ===== VIDEOS PAGE =====
        async function loadVideos() {
            const grid = document.getElementById('videosGrid');
            if (!grid) return;
            try {
                const data = await apiGet('api/videos.php');
                renderVideos(data.videos || []);
            } catch (e) {
                grid.innerHTML = '<div class="videos-loading">Impossible de charger les vidéos.</div>';
                console.error('Videos load failed:', e.message);
            }
        }

        function renderVideos(videos) {
            const grid = document.getElementById('videosGrid');
            if (!grid) return;
            if (videos.length === 0) {
                grid.innerHTML = '<div class="videos-loading">Aucune vidéo disponible pour le moment.</div>';
                return;
            }
            grid.innerHTML = videos.map((v, i) => {
                const color = v.trainerColor || '#2292cb';
                const photo = v.trainerPhoto
                    ? `<img class="video-card-trainer-photo" src="${v.trainerPhoto}" alt="${v.trainerName || ''}" onerror="this.style.display='none'">`
                    : '';
                return `
                    <button class="video-card" data-idx="${i}" style="--video-color:${color}">
                        <div class="video-card-thumb">
                            <video class="video-card-preview" preload="metadata" muted playsinline>
                                <source src="${v.src}#t=0.5" type="${v.mimeType}">
                            </video>
                            <div class="video-card-play" aria-hidden="true">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                            ${v.tag ? `<span class="video-card-tag">${v.tag}</span>` : ''}
                        </div>
                        <div class="video-card-body">
                            <div class="video-card-trainer">
                                ${photo}
                                <span>${v.trainerName || ''}</span>
                            </div>
                            <div class="video-card-title">${v.title}</div>
                        </div>
                    </button>
                `;
            }).join('');

            grid.querySelectorAll('.video-card').forEach(btn => {
                btn.addEventListener('click', () => openVideoLightbox(videos[parseInt(btn.dataset.idx, 10)]));
            });
        }

        function openVideoLightbox(v) {
            const lb     = document.getElementById('videoLightbox');
            const player = document.getElementById('videoLightboxPlayer');
            const title  = document.getElementById('videoLightboxTitle');
            const trainer= document.getElementById('videoLightboxTrainer');
            const desc   = document.getElementById('videoLightboxDesc');
            if (!lb || !player) return;

            player.innerHTML = `<source src="${v.src}" type="${v.mimeType}">`;
            player.load();
            title.textContent   = v.title;
            trainer.textContent = (v.tag ? v.tag + ' · ' : '') + (v.trainerName || '');
            desc.textContent    = v.description || '';

            lb.classList.add('active');
            lb.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            try { player.play(); } catch (e) {}
        }

        function closeVideoLightbox() {
            const lb     = document.getElementById('videoLightbox');
            const player = document.getElementById('videoLightboxPlayer');
            if (!lb) return;
            try { player.pause(); player.currentTime = 0; player.innerHTML = ''; } catch (e) {}
            lb.classList.remove('active');
            lb.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        function setupVideosPage() {
            const lb    = document.getElementById('videoLightbox');
            const close = document.getElementById('videoLightboxClose');
            if (close) close.addEventListener('click', closeVideoLightbox);
            if (lb) lb.addEventListener('click', e => { if (e.target === lb) closeVideoLightbox(); });
            document.addEventListener('keydown', e => { if (e.key === 'Escape') closeVideoLightbox(); });
        }

        // ===== BURGER MENU MOBILE =====
        function setupBurgerMenu() {
            const btn       = document.getElementById('burgerBtn');
            const nav       = document.getElementById('navContainer');
            const backdrop  = document.getElementById('navBackdrop');
            const closeBtn  = document.getElementById('navClose');
            if (!btn || !nav) return;

            const close = () => {
                btn.setAttribute('aria-expanded', 'false');
                nav.classList.remove('active');
                if (backdrop) backdrop.classList.remove('active');
                document.body.style.overflow = '';
            };
            const open = () => {
                btn.setAttribute('aria-expanded', 'true');
                nav.classList.add('active');
                if (backdrop) backdrop.classList.add('active');
                document.body.style.overflow = 'hidden';
            };

            btn.addEventListener('click', () => {
                btn.getAttribute('aria-expanded') === 'true' ? close() : open();
            });
            if (closeBtn)  closeBtn.addEventListener('click', close);
            if (backdrop)  backdrop.addEventListener('click', close);
            nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
            document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
        }

        // ===== ADMIN ENTRY =====
        // Le mot de passe admin est vérifié côté serveur (login.php).
        // 3 clics sur le logo → redirige vers la page de login.
        function setupAdminMode() {
            const logoContainer = document.getElementById('logoContainer');
            const adminBtn = document.getElementById('adminBtn');

            if (logoContainer) {
                logoContainer.addEventListener('click', function(e) {
                    logoClickCount++;
                    clearTimeout(logoClickTimer);
                    if (logoClickCount === 3) {
                        logoClickCount = 0;
                        e.preventDefault();
                        window.location.href = 'login.php';
                        return;
                    }
                    logoClickTimer = setTimeout(() => { logoClickCount = 0; }, 500);
                });
            }

            if (adminBtn && !adminBtn.dataset.bound) {
                adminBtn.dataset.bound = '1';
                adminBtn.addEventListener('click', function(e) {
                    if (adminBtn.tagName === 'BUTTON') {
                        e.preventDefault();
                        window.location.href = 'login.php';
                    }
                });
            }
        }

        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.shiftKey && e.code === 'KeyA') {
                window.location.href = 'login.php';
            }
        });

        // ===== FORMATIONS PAGE =====
        function buildSessionRow(session, avatarColor) {
            const count = session.inscrits || 0;
            const capacity = session.capacity || 10;
            const isFull = count >= capacity;
            const remaining = capacity - count;
            const few = remaining <= 3 && remaining > 0;

            let dotsHtml = '';
            for (let i = 0; i < capacity; i++) {
                const taken = i < count;
                const warnClass = (isFull || few) && taken ? ' warn' : '';
                dotsHtml += `<span class="dot${taken ? ' taken' + warnClass : ''}"></span>`;
            }

            let statusText = '';
            let statusClass = '';
            const waitlist = count - capacity;
            if (isFull) {
                statusText = waitlist > 0 ? `Complet — ${waitlist} en liste d'attente` : 'Complet — liste d\'attente ouverte';
                statusClass = 'full';
            } else if (few) {
                statusText = `${remaining} place${remaining > 1 ? 's' : ''} restante${remaining > 1 ? 's' : ''}`;
                statusClass = 'few';
            } else {
                statusText = `${remaining} places restantes`;
            }

            const lieuHtml = (session.lieu || session.salle)
                ? `<div class="session-lieu">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        <span>${[session.lieu, session.salle].filter(Boolean).join(' — ')}</span>
                   </div>`
                : '';

            return `
                <div class="session-row">
                    <div class="session-date">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                        <span>${session.label}</span>
                    </div>
                    ${lieuHtml}
                    <div class="session-seats">
                        <div class="formation-seats-dots">${dotsHtml}</div>
                        <span class="formation-seats-text ${statusClass}">${statusText}</span>
                    </div>
                    <button class="session-cta" onclick="openFormationModal('${session.id}')">
                        ${isFull ? 'Liste d\'attente' : 'S\'inscrire'}
                    </button>
                </div>
            `;
        }

        function renderFormations() {
            const grid = document.getElementById('formationGrid');
            if (!grid) return;

            grid.innerHTML = FORMATIONS.map(f => {
                const avatarContent = f.photo
                    ? `<img src="${f.photo}" alt="${f.trainer}" style="width: 100%; height: 100%; object-fit: cover;">`
                    : f.initials;

                const avatarStyle = f.photo
                    ? 'overflow: hidden;'
                    : `background: ${f.avatarColor};`;

                const tagStyle = `background: ${f.avatarColor}12; color: ${f.avatarColor};`;

                let priceHtml = '';
                if (f.tarifSalon && f.tarifNormal) {
                    const salonNum  = parseInt(f.tarifSalon);
                    const normalNum = parseInt(f.tarifNormal);
                    const economie  = normalNum - salonNum;
                    priceHtml = `
                        <div class="formation-price-block">
                            <div class="price-badge-ribbon">Offre Salon</div>
                            <div class="price-row">
                                <span class="price-amount">${f.tarifSalon}</span>
                                <span class="price-amount-crossed">${f.tarifNormal}</span>
                            </div>
                            <div class="price-saving">Économisez ${economie} €</div>
                        </div>`;
                }

                const sessionsHtml = (f.sessions || []).map(s => buildSessionRow(s, f.avatarColor)).join('');

                return `
                    <div class="formation-card">
                        <div class="formation-card-top">
                            <div class="formation-card-header">
                                <div class="formation-avatar" style="${avatarStyle}">${avatarContent}</div>
                                <div class="formation-header-text">
                                    <div class="formation-trainer">${f.trainer}</div>
                                    <span class="formation-tag" style="${tagStyle}">${f.tag}</span>
                                </div>
                            </div>
                            <div class="formation-card-body">
                                <div class="formation-title">${f.title}</div>
                                <div class="formation-resume">${f.resume}</div>
                                ${f.lien ? `<a href="${f.lien}" target="_blank" rel="noopener" class="formation-idlabs-link">Voir le programme sur idLabs.fr ↗</a>` : ''}
                            </div>
                            ${priceHtml}
                        </div>
                        <div class="formation-card-sessions">
                            <div class="sessions-label">Sessions disponibles</div>
                            ${sessionsHtml}
                        </div>
                    </div>
                `;
            }).join('');
        }

        function findSessionById(sessionId) {
            for (const f of FORMATIONS) {
                const s = (f.sessions || []).find(sess => sess.id === sessionId);
                if (s) return { formation: f, session: s };
            }
            return null;
        }

        function openFormationModal(sessionId) {
            const found = findSessionById(sessionId);
            if (!found) return;
            const { formation, session } = found;

            const count    = session.inscrits || 0;
            const capacity = session.capacity || 10;
            const isFull   = count >= capacity;
            const remaining = capacity - count;

            let priceChip = '';
            if (formation.tarifSalon && formation.tarifNormal) {
                priceChip = `<div class="modal-info-chip"><strong style="color:var(--primary)">${formation.tarifSalon}</strong>&nbsp;<span style="color:#bbb;text-decoration:line-through">${formation.tarifNormal}</span></div>`;
            } else if (formation.tarif) {
                priceChip = `<div class="modal-info-chip">${formation.tarif}</div>`;
            }

            const statusChip = isFull
                ? `<div class="modal-info-chip status-full"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>Liste d'attente</div>`
                : `<div class="modal-info-chip status-available"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>${remaining} place${remaining > 1 ? 's' : ''}</div>`;

            const objectifs = formation.objectifs || [];

            const modalBody = `
                <div class="modal-body-inner">
                    <div class="success-message" style="display: none;" id="regSuccess"></div>

                    <div class="modal-info-bar">
                        <div class="modal-info-chip">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                            ${session.label}
                        </div>
                        ${(session.lieu || session.salle) ? `<div class="modal-info-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${[session.lieu, session.salle].filter(Boolean).join(' — ')}</div>` : ''}
                        ${priceChip}
                        ${statusChip}
                    </div>

                    ${objectifs.length > 0 ? `
                        <div class="modal-objectives">
                            ${objectifs.map(obj => `<span class="modal-objective-tag">${obj}</span>`).join('')}
                        </div>
                    ` : ''}

                    ${formation.lien ? `
                        <a href="${formation.lien}" target="_blank" rel="noopener" class="modal-idlabs-btn">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            Voir le programme sur idLabs.fr
                        </a>
                    ` : ''}

                    <form id="formationForm">
                        <div class="modal-form-grid">
                            <div class="form-group">
                                <label>Nom *</label>
                                <input type="text" name="nom" placeholder="Dupont" required>
                            </div>
                            <div class="form-group">
                                <label>Prénom *</label>
                                <input type="text" name="prenom" placeholder="Marie" required>
                            </div>
                            <div class="form-group">
                                <label>Email *</label>
                                <input type="email" name="email" placeholder="marie@entreprise.com" required>
                            </div>
                            <div class="form-group">
                                <label>Téléphone</label>
                                <input type="tel" name="telephone" placeholder="06 12 34 56 78">
                            </div>
                            <div class="form-group form-group-full">
                                <label>Entreprise *</label>
                                <input type="text" name="entreprise" placeholder="Nom de votre entreprise" required>
                            </div>
                        </div>
                        <button type="submit" class="form-submit">${isFull ? 'Rejoindre la liste d\'attente' : 'Confirmer mon inscription'}</button>
                    </form>
                </div>
            `;

            const modal = document.getElementById('registrationModal');
            if (!modal) return;

            document.getElementById('modalFormTitle').textContent = formation.trainer + ' — ' + formation.title;
            document.getElementById('modalBody').innerHTML = modalBody;

            document.getElementById('formationForm').addEventListener('submit', async function(e) {
                e.preventDefault();
                const submitBtn = this.querySelector('.form-submit');
                if (submitBtn) submitBtn.disabled = true;

                const formData = new FormData(this);
                const payload = {
                    sessionId:  sessionId,
                    nom:        formData.get('nom'),
                    prenom:     formData.get('prenom'),
                    email:      formData.get('email'),
                    telephone:  formData.get('telephone'),
                    entreprise: formData.get('entreprise')
                };

                try {
                    const data = await apiPost('api/formations_register.php', payload);
                    session.inscrits = data.inscrits || (count + 1);
                    document.getElementById('regSuccess').textContent = `Inscription confirmée pour ${payload.prenom} ${payload.nom} — session du ${session.label}!`;
                    document.getElementById('regSuccess').style.display = 'block';
                    document.getElementById('formationForm').style.display = 'none';

                    setTimeout(async () => {
                        closeModal();
                        await loadFormations();
                        renderFormations();
                        showToast(`Inscription enregistrée pour ${formation.trainer} (${session.label})`);
                    }, 1500);
                } catch (err) {
                    if (submitBtn) submitBtn.disabled = false;
                    showToast('Erreur : ' + err.message);
                }
            });

            modal.classList.add('active');
        }

        function closeModal() {
            const modal = document.getElementById('registrationModal');
            if (modal) modal.classList.remove('active');
        }

        // ===== QUIZ PAGE =====
        function initQuiz() {
            if (!document.getElementById('quizLeadForm')) return;

            quizState.totalQuestions = QUIZ_CATEGORIES.reduce((sum, cat) => sum + cat.questions.length, 0);

            document.querySelectorAll('.cia-inline-input').forEach(input => {
                const resize = () => {
                    const len = Math.max(input.placeholder.length, input.value.length);
                    input.style.width = (len + 1) + 'ch';
                };
                input.addEventListener('input', resize);
                resize();
            });

            const stepFieldMap = {
                'leadPrenom': 1, 'leadNom': 1,
                'leadEntreprise': 2, 'leadFonction': 2,
                'leadEmail': 4
            };
            Object.entries(stepFieldMap).forEach(([id, step]) => {
                const el = document.getElementById(id);
                if (el) el.addEventListener('keydown', e => {
                    if (e.key === 'Enter') ciaNext(step);
                });
            });
        }

        const CIA_STEPS = [
            null,
            () => {
                const prenom = document.getElementById('leadPrenom').value.trim();
                const nom    = document.getElementById('leadNom').value.trim();
                if (!prenom || !nom) { showToast('Indiquez votre prénom et votre nom.'); return false; }
                const fullName = (prenom.charAt(0).toUpperCase() + prenom.slice(1)) + ' ' + (nom.charAt(0).toUpperCase() + nom.slice(1));
                const agentSpan = document.getElementById('ciaAgentName');
                if (agentSpan) agentSpan.textContent = fullName;
                return true;
            },
            () => {
                const entreprise = document.getElementById('leadEntreprise').value.trim();
                const fonction   = document.getElementById('leadFonction').value.trim();
                if (!entreprise) { showToast('Indiquez le nom de votre organisation.'); return false; }
                if (!fonction)   { showToast('Indiquez votre fonction.'); return false; }
                const orgName = entreprise.charAt(0).toUpperCase() + entreprise.slice(1);
                const orgSpan = document.getElementById('ciaOrgName');
                if (orgSpan) orgSpan.textContent = orgName;
                return true;
            },
            () => {
                const secteur = document.getElementById('leadSecteur').value;
                const taille  = document.getElementById('leadTaille').value;
                if (!secteur) { showToast('Sélectionnez votre secteur d\'activité.'); return false; }
                if (!taille)  { showToast('Sélectionnez la taille de votre équipe.'); return false; }
                return true;
            },
            () => {
                const email = document.getElementById('leadEmail').value.trim();
                if (!email || !email.includes('@')) { showToast('Adresse email invalide.'); return false; }
                return true;
            }
        ];

        function ciaNext(currentStep) {
            const validate = CIA_STEPS[currentStep];
            if (validate && !validate()) return;
            if (currentStep === 4) { startQuiz(); return; }

            const current = document.getElementById('ciaStep' + currentStep);
            const next    = document.getElementById('ciaStep' + (currentStep + 1));
            if (current) current.classList.remove('active');
            if (next)    next.classList.add('active');
        }

        function startQuiz() {
            const nom        = document.getElementById('leadNom').value.trim();
            const prenom     = document.getElementById('leadPrenom').value.trim();
            const email      = document.getElementById('leadEmail').value.trim();
            const entreprise = document.getElementById('leadEntreprise').value.trim();

            if (!nom || !prenom || !email || !entreprise) {
                showToast('Veuillez remplir tous les champs obligatoires');
                return;
            }

            quizState.leadData = {
                nom, prenom, email, entreprise,
                secteur:  document.getElementById('leadSecteur').value || 'N/A',
                taille:   document.getElementById('leadTaille').value || 'N/A',
                fonction: document.getElementById('leadFonction').value || 'N/A'
            };

            quizState.allQuestions = [];
            QUIZ_CATEGORIES.forEach((cat, catIdx) => {
                cat.questions.forEach((q, qIdx) => {
                    quizState.allQuestions.push({ cat, catIdx, q, qIdx });
                });
            });
            quizState.totalQuestions  = quizState.allQuestions.length;
            quizState.currentQuestion = 0;
            quizState.answers = {};
            quizState.xp = 0;

            document.getElementById('quizLeadForm').style.display = 'none';
            document.getElementById('quizArena').style.display    = 'flex';
            document.getElementById('resultsPage').style.display  = 'none';
            const quitBtn = document.getElementById('qaQuitBtn');
            if (quitBtn) quitBtn.style.display = 'flex';

            showQuestion(0);
        }

        function showQuestion(idx) {
            quizState.currentQuestion = idx;
            if (idx >= quizState.allQuestions.length) {
                calculateResults();
                return;
            }
            _renderQuestion(idx);
        }

        function _renderQuestion(idx) {
            const card = document.getElementById('questionCard');

            const _doRender = () => {
                const { cat, catIdx, q, qIdx } = quizState.allQuestions[idx];

                const pct = (idx / quizState.allQuestions.length) * 100;
                const fill = document.getElementById('progressFill');
                if (fill) fill.style.width = pct + '%';

                const counter = document.getElementById('questionCounter');
                if (counter) counter.textContent = 'Q-' + String(idx + 1).padStart(2, '0') + ' / ' + quizState.allQuestions.length;

                const icon = document.getElementById('qaCategoryIcon');
                const name = document.getElementById('qaCategoryName');
                if (icon) icon.textContent = cat.icon;
                if (name) name.textContent = cat.name;

                const catsEl = document.getElementById('qaCategoryProgress');
                if (catsEl) {
                    catsEl.innerHTML = QUIZ_CATEGORIES.map((c, i) => {
                        const done = i < catIdx;
                        const active = i === catIdx;
                        return `<div class="qa-cat-step${done ? ' done' : ''}${active ? ' active' : ''}" style="--c:${c.color}">
                            <div class="qa-cat-bubble">${done ? '✓' : c.icon}</div>
                            <span class="qa-cat-name">${c.name}</span>
                        </div>`;
                    }).join('');
                }

                if (card) card.style.setProperty('--cat-color', cat.color);

                const missionLabel = document.getElementById('qaMissionLabel');
                if (missionLabel) missionLabel.textContent = cat.desc;
                const qText = document.getElementById('questionText');
                if (qText) qText.textContent = q;

                const key = catIdx + '-' + qIdx;
                const current = quizState.answers[key];
                const container = document.getElementById('answerButtons');

                if (container) {
                    container.innerHTML = `
                        <div class="answer-scale-hint">
                            <span class="answer-scale-end answer-scale-end--low"><span class="answer-scale-dot"></span>Pas du tout</span>
                            <span class="answer-scale-end answer-scale-end--high">Totalement<span class="answer-scale-dot"></span></span>
                        </div>
                        <div class="answer-btns-row">
                            ${[1,2,3,4,5,6].map(v => `
                                <button class="answer-btn${current === v ? ' selected' : ''}"
                                    data-value="${v}" data-cat="${catIdx}" data-q="${qIdx}"
                                    style="--cat-color: ${cat.color};">
                                    <span class="answer-btn-num">${v}</span>
                                </button>
                            `).join('')}
                        </div>
                    `;

                    container.querySelectorAll('.answer-btn').forEach(btn => {
                        btn.addEventListener('click', function() {
                            const val = parseInt(this.dataset.value);
                            const k = this.dataset.cat + '-' + this.dataset.q;
                            quizState.answers[k] = val;
                            container.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
                            this.classList.add('selected');
                            setTimeout(() => showQuestion(idx + 1), 220);
                        });
                    });
                }

                if (card) {
                    void card.offsetWidth;
                    card.classList.add('qa-enter');
                    setTimeout(() => card.classList.remove('qa-enter'), 350);
                }
            };

            if (card && idx > 0) {
                card.classList.add('qa-exit');
                setTimeout(() => { card.classList.remove('qa-exit'); _doRender(); }, 200);
            } else {
                _doRender();
            }
        }

        async function calculateResults() {
            const dimensionScores = {};
            let totalScore = 0;

            QUIZ_CATEGORIES.forEach((cat, catIdx) => {
                let catScore = 0;
                let catCount = 0;
                cat.questions.forEach((q, qIdx) => {
                    const answer = quizState.answers[`${catIdx}-${qIdx}`] || 0;
                    catScore += answer;
                    catCount++;
                });
                const avgScore = catCount > 0 ? (catScore / (catCount * 6)) * 100 : 0;
                dimensionScores[cat.id] = Math.round(avgScore);
                totalScore += avgScore;
            });

            const finalScore = Math.round(totalScore / QUIZ_CATEGORIES.length);

            const detailedAnswers = quizState.allQuestions.map(({ cat, catIdx, q, qIdx }) => ({
                categorie: cat.name,
                question:  q,
                reponse:   quizState.answers[catIdx + '-' + qIdx] || null
            }));

            // Persistance côté serveur (BDD MySQL)
            try {
                await apiPost('api/quiz_submit.php', {
                    leadData:        quizState.leadData,
                    answers:         detailedAnswers,
                    dimensionScores: dimensionScores,
                    finalScore:      finalScore
                });
            } catch (e) {
                console.error('Quiz submit failed:', e.message);
                showToast('Le résultat n\'a pas pu être enregistré.');
            }

            showResults(finalScore, dimensionScores);
        }

        function showResults(score, dimensionScores) {
            const level = QUIZ_LEVELS.find(l => score >= l.min && score <= l.max);

            const quizProgress = document.getElementById('quizArena');
            if (quizProgress) quizProgress.style.display = 'none';
            const resultsPage = document.getElementById('resultsPage');
            if (resultsPage) resultsPage.style.display = 'block';
            const quizPageEl = document.querySelector('.quiz-page');
            if (quizPageEl) quizPageEl.style.maxWidth = '100%';
            const containerPageEl = document.querySelector('.container-page');
            if (containerPageEl) { containerPageEl.style.maxWidth = '100%'; containerPageEl.style.padding = '0'; }
            const quitBtn = document.getElementById('qaQuitBtn');
            if (quitBtn) quitBtn.style.display = 'none';

            const rpDate = document.getElementById('rpDate');
            if (rpDate) rpDate.textContent = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

            const resultName = document.getElementById('resultName');
            if (resultName) resultName.textContent = `${quizState.leadData.prenom} ${quizState.leadData.nom}`;
            const rpCompany = document.getElementById('rpCompany');
            if (rpCompany) rpCompany.textContent = quizState.leadData.entreprise || '';

            const scoreRing = document.getElementById('scoreRing');
            if (scoreRing) {
                const r = 88, cx = 100, cy = 100;
                const circ = 2 * Math.PI * r;
                const bg = circ * 0.75;
                const offset = bg * (1 - score / 100);
                const rot = 135;
                scoreRing.innerHTML = `
                    <svg viewBox="0 0 200 200" width="200" height="200">
                        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="14"
                            stroke-dasharray="${bg} ${circ}" stroke-dashoffset="0"
                            stroke-linecap="round" transform="rotate(${rot} ${cx} ${cy})"/>
                        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${level.color}" stroke-width="14"
                            stroke-dasharray="${bg} ${circ}" stroke-dashoffset="${bg}"
                            stroke-linecap="round" transform="rotate(${rot} ${cx} ${cy})"
                            id="arcFill"
                            style="transition: stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1); filter: drop-shadow(0 0 8px ${level.color}88);"/>
                    </svg>`;
                setTimeout(() => {
                    const arc = document.getElementById('arcFill');
                    if (arc) arc.style.strokeDashoffset = offset;
                }, 120);
            }

            const rpScoreNum = document.getElementById('rpScoreNum');
            if (rpScoreNum) {
                let current = 0;
                const step = Math.ceil(score / 40);
                const timer = setInterval(() => {
                    current = Math.min(current + step, score);
                    rpScoreNum.textContent = current;
                    if (current >= score) clearInterval(timer);
                }, 30);
            }

            const levelName = document.getElementById('levelName');
            if (levelName) {
                levelName.innerHTML = `${level.emoji} ${level.name}`;
                levelName.style.background = level.color + '22';
                levelName.style.color = level.color;
                levelName.style.border = `1px solid ${level.color}44`;
            }
            const levelTitle = document.getElementById('levelTitle');
            if (levelTitle) levelTitle.textContent = level.title;
            const levelDesc = document.getElementById('levelDesc');
            if (levelDesc) levelDesc.innerHTML = buildPersonalAnalysis(dimensionScores, score, quizState.leadData);

            const scoresContainer = document.getElementById('dimensionScores');
            if (scoresContainer) {
                const tierLabel = s => s < 40 ? 'Faible' : s < 70 ? 'En développement' : 'Avancé';
                scoresContainer.innerHTML = QUIZ_CATEGORIES.map(cat => {
                    const s = dimensionScores[cat.id] || 0;
                    const r2 = 17, circ2 = 2 * Math.PI * r2;
                    const offset2 = circ2 * (1 - s / 100);
                    const tiers = RECOMMENDATIONS[cat.id] || [];
                    const reco = tiers.find(t => s <= t.maxScore);
                    const formation = reco && reco.trainer ? FORMATIONS.find(f => f.id === reco.trainer) : null;
                    return `
                        <div class="kpi-card" style="--kpi-color: ${cat.color};">
                            <div class="kpi-card-top">
                                <div class="kpi-card-icon">${cat.icon}</div>
                                <svg class="kpi-score-circle" viewBox="0 0 44 44">
                                    <circle cx="22" cy="22" r="${r2}" fill="none" stroke="#f1f5f9" stroke-width="4"/>
                                    <circle cx="22" cy="22" r="${r2}" fill="none" stroke="${cat.color}" stroke-width="4"
                                        stroke-dasharray="${circ2}" stroke-dashoffset="${circ2}"
                                        stroke-linecap="round" transform="rotate(-90 22 22)"
                                        class="kpi-arc" data-target="${offset2}"
                                        style="transition: stroke-dashoffset 1s 0.1s cubic-bezier(0.4,0,0.2,1);"/>
                                </svg>
                            </div>
                            <div class="kpi-card-name">${cat.name}</div>
                            <div class="kpi-card-score">${s}<span>/100</span></div>
                            <div class="kpi-card-bar">
                                <div class="kpi-card-bar-fill" data-target="${s}" style="background:${cat.color};"></div>
                            </div>
                            <div class="kpi-card-tier">${tierLabel(s)}</div>
                            ${reco ? `<div class="kpi-card-divider"></div>
                            <div class="kpi-reco-tag" style="background:${cat.color};">${reco.tag}</div>
                            <div class="kpi-reco-text">${reco.text}</div>` : ''}
                            ${formation ? `<div class="kpi-formation">
                                <div class="kpi-formation-label">Formation recommandée</div>
                                <div class="kpi-formation-inner">
                                    <img class="kpi-formation-photo" src="${formation.photo}" alt="${formation.trainer}" onerror="this.style.display='none'">
                                    <div class="kpi-formation-info">
                                        <div class="kpi-formation-trainer">${formation.trainer}</div>
                                        <div class="kpi-formation-title">${formation.title}</div>
                                    </div>
                                    <a href="formations.php" class="kpi-formation-cta" style="background:${cat.color};">Voir →</a>
                                </div>
                            </div>` : ''}
                        </div>`;
                }).join('');

                setTimeout(() => {
                    document.querySelectorAll('.kpi-card-bar-fill').forEach(el => { el.style.width = el.dataset.target + '%'; });
                    document.querySelectorAll('.kpi-arc').forEach(el => { el.style.strokeDashoffset = el.dataset.target; });
                }, 150);
            }

            drawRadarChart(dimensionScores);

            const analysisEl = document.getElementById('personalAnalysis');
            if (analysisEl) analysisEl.style.display = 'none';

            const recosSect = document.querySelector('.recos-section');
            if (recosSect) recosSect.style.display = 'none';
        }

        function drawRadarChart(dimensionScores) {
            const canvas = document.getElementById('radarChart');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            const W = canvas.width, H = canvas.height;
            const cx = W / 2, cy = H / 2;
            const maxR = 100;
            const n = QUIZ_CATEGORIES.length;

            ctx.clearRect(0, 0, W, H);

            const angles = Array.from({ length: n }, (_, i) => (i / n) * Math.PI * 2 - Math.PI / 2);
            const px = (r, i) => cx + r * Math.cos(angles[i]);
            const py = (r, i) => cy + r * Math.sin(angles[i]);

            [20, 40, 60, 80, 100].forEach(pct => {
                const r = (pct / 100) * maxR;
                ctx.beginPath();
                for (let i = 0; i < n; i++) {
                    i === 0 ? ctx.moveTo(px(r, i), py(r, i)) : ctx.lineTo(px(r, i), py(r, i));
                }
                ctx.closePath();
                ctx.strokeStyle = pct === 100 ? '#c8d5e8' : '#e8eef6';
                ctx.lineWidth = pct === 100 ? 1.5 : 1;
                ctx.stroke();
                if (pct < 100) {
                    ctx.fillStyle = '#b0bec5';
                    ctx.font = '9px sans-serif';
                    ctx.textAlign = 'left';
                    ctx.fillText(pct, cx + r + 3, cy + 3);
                }
            });

            for (let i = 0; i < n; i++) {
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(px(maxR, i), py(maxR, i));
                ctx.strokeStyle = '#dde5f0';
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            ctx.beginPath();
            for (let i = 0; i < n; i++) {
                const r = (dimensionScores[QUIZ_CATEGORIES[i].id] / 100) * maxR;
                i === 0 ? ctx.moveTo(px(r, i), py(r, i)) : ctx.lineTo(px(r, i), py(r, i));
            }
            ctx.closePath();
            ctx.fillStyle = 'rgba(34,146,203,0.12)';
            ctx.fill();
            ctx.strokeStyle = '#2292cb';
            ctx.lineWidth = 2;
            ctx.stroke();

            for (let i = 0; i < n; i++) {
                const cat = QUIZ_CATEGORIES[i];
                const r = (dimensionScores[cat.id] / 100) * maxR;
                ctx.beginPath();
                ctx.arc(px(r, i), py(r, i), 5, 0, Math.PI * 2);
                ctx.fillStyle = cat.color;
                ctx.fill();
                ctx.strokeStyle = 'white';
                ctx.lineWidth = 2;
                ctx.stroke();
            }

            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            for (let i = 0; i < n; i++) {
                const cat = QUIZ_CATEGORIES[i];
                const labelR = maxR + 22;
                const lx = px(labelR, i), ly = py(labelR, i);
                ctx.font = '18px sans-serif';
                ctx.fillText(cat.icon, lx, ly - 7);
                ctx.fillStyle = cat.color;
                ctx.font = 'bold 11px sans-serif';
                ctx.fillText(dimensionScores[cat.id], lx, ly + 9);
            }
        }

        // ===== UTILITIES =====
        function showToast(message) {
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.textContent = message;
            document.body.appendChild(toast);
            setTimeout(() => { toast.remove(); }, 3000);
        }

        // ===== INITIALIZATION =====
        document.addEventListener('DOMContentLoaded', async function() {
            const currentPage = detectCurrentPage();

            setupAdminMode();
            setupBurgerMenu();

            if (currentPage === 'formations') {
                await loadFormations();
                renderFormations();
            } else if (currentPage === 'quiz') {
                // Les recommandations du quiz référencent les formations.
                await Promise.all([loadFormations(), loadQuizConfig()]);

                if (new URLSearchParams(location.search).has('test')) {
                    quizState.leadData = { prenom: 'Test', nom: 'Dev', email: 'test@dev.fr', entreprise: 'ID Labs' };
                    quizState.allQuestions = [];
                    QUIZ_CATEGORIES.forEach((cat, catIdx) => {
                        cat.questions.forEach((q, qIdx) => {
                            quizState.allQuestions.push({ cat, catIdx, q, qIdx });
                            quizState.answers[`${catIdx}-${qIdx}`] = 5;
                        });
                    });
                    document.getElementById('quizLeadForm').style.display = 'none';
                    calculateResults();
                    return;
                }
                initQuiz();
            } else if (currentPage === 'videos') {
                setupVideosPage();
                await loadVideos();
            }
        });
