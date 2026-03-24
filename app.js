        // ===== CONFIGURATION DATA =====
        const FORMATIONS = [
            {
                id: 'timothee',
                trainer: 'Timothée',
                initials: 'T',
                avatarColor: '#2292cb',
                photo: 'photos/timothee.jpg',
                tag: 'Productivité',
                title: 'Fluidifier ses tâches professionnelles quotidiennes grâce à l\'IA',
                resume: 'Cette formation de 7h vous prépare à utiliser l\'IA au travail pour gagner en productivité tout en respectant le cadre éthique.',
                objectifs: [
                    'Piloter ses réunions grâce à l\'IA',
                    'Améliorer ses usages bureautiques grâce à l\'IA',
                    'Utiliser les IA d\'assistance à la production',
                    'Utiliser l\'IA dans un cadre éthique défini'
                ],
                bio: '',
                sessions: [
                    { id: 'timothee_s1', label: '9 juin 2026', date: '2026-06-09' },
                    { id: 'timothee_s2', label: '10 septembre 2026', date: '2026-09-10' }
                ],
                tarifSalon: '350 €',
                tarifNormal: '400 €',
                tarif: '',
                lien: ''
            },
            {
                id: 'stephanie',
                trainer: 'Stéphanie',
                initials: 'S',
                avatarColor: '#8b5cf6',
                photo: 'photos/stephanie.jpg',
                tag: 'Création visuelle',
                title: 'Maîtrisez la création d\'images au moyen de l\'IA',
                resume: 'Créez, retouchez et déclinez vos visuels professionnels grâce à l\'IA — sans compétences techniques préalables.',
                objectifs: [
                    'Comprendre et choisir les bons outils IA selon son besoin',
                    'Générer des visuels professionnels à partir d\'un brief',
                    'Retoucher et enrichir des images existantes avec l\'IA',
                    'Livrer un projet complet avec ses déclinaisons multi-formats'
                ],
                bio: '',
                sessions: [
                    { id: 'stephanie_s1', label: '25-26 juin 2026', date: '2026-06-25' },
                    { id: 'stephanie_s2', label: '21-22 septembre 2026', date: '2026-09-21' }
                ],
                tarifSalon: '375 €',
                tarifNormal: '455 €',
                tarif: '',
                lien: 'https://www.idlabs.fr/fr/formations/ia-generative/ia-generative-d-images-creer-retoucher-et-decliner-vos-visuels-professionnels'
            },
            {
                id: 'cecile',
                trainer: 'Cécile Adeline',
                initials: 'CA',
                avatarColor: '#2eb87a',
                photo: 'photos/cecile_adeline.jpg',
                tag: 'Communication',
                title: 'Communiquer de manière authentique et immersive en 2026 grâce à l\'IA générative',
                resume: 'Utiliser l\'IA générative pour amplifier son message, produire des contenus authentiques et créer des expériences de communication immersives.',
                objectifs: [
                    'Maîtriser l\'art du prompt engineering pour une communication authentique',
                    'Créer un éco-système de communication {Vous + IA} personnalisé à votre marque',
                    'Décupler votre force de frappe éditoriale tout en conservant votre voix unique'
                ],
                bio: 'Je suis Cécile, copywriter. Ce que je débloque chez un dirigeant, c\'est la capacité à rendre son savoir-faire désirable et évident : son message cesse d\'être purement informatif pour devenir magnétique.',
                sessions: [
                    { id: 'cecile_s1', label: '11 juin 2026', date: '2026-06-11' },
                    { id: 'cecile_s2', label: '17 septembre 2026', date: '2026-09-17' }
                ],
                tarifSalon: '350 €',
                tarifNormal: '400 €',
                tarif: '',
                lien: 'https://www.idlabs.fr/fr/formations/ia-generative/communiquer-de-maniere-authentique-et-immersive-en-2025-grace-a-l-ia-generative'
            },
            {
                id: 'cedric',
                trainer: 'Cédric',
                initials: 'C',
                avatarColor: '#e8922a',
                photo: 'photos/cedric.jpg',
                tag: 'Agents IA',
                title: 'Automatisez vos tâches avec Make et l\'IA',
                resume: 'Apprenez à créer des automatisations visuelles avec Make et à intégrer l\'IA dans vos workflows, sans coder.',
                objectifs: [
                    'Maîtriser l\'interface et les concepts fondamentaux de Make',
                    'Exploiter les structures de données, la logique conditionnelle et les fonctions de transformation',
                    'Intégrer l\'intelligence artificielle et adopter les bonnes pratiques de production'
                ],
                bio: 'Je suis Cédric, développeur et formateur. Ce que je débloque chez un dirigeant, c\'est la maîtrise de ses outils numériques : je construis des solutions solides, intégrant développement, automatisation, IA et No-Code.',
                sessions: [
                    { id: 'cedric_s1', label: '16 juin 2026', date: '2026-06-16' },
                    { id: 'cedric_s2', label: '1er octobre 2026', date: '2026-10-01' }
                ],
                tarifSalon: '380 €',
                tarifNormal: '450 €',
                tarif: '',
                lien: 'https://www.idlabs.fr/fr/formations/digital-en-entreprise/automatisez-vos-taches-avec-make-et-l-ia'
            },
            {
                id: 'jb',
                trainer: 'JB',
                initials: 'JB',
                avatarColor: '#152f7b',
                photo: 'photos/jb.png',
                tag: 'Initiation',
                title: 'Découvrir l\'Intelligence artificielle et s\'initier à l\'IA Générative',
                resume: 'Découvrez une formation pratique pour maîtriser l\'IA générative, ses usages professionnels et booster performance, innovation et compétitivité',
                objectifs: [
                    'Définir les principes de base de l\'Intelligence artificielle',
                    'Maîtriser les fondamentaux du prompt engineering',
                    'Appréhender et tester les applications et outils d\'IA Générative'
                ],
                bio: '',
                sessions: [
                    { id: 'jb_s1', label: '4 juin 2026', date: '2026-06-04' },
                    { id: 'jb_s2', label: '6 octobre 2026', date: '2026-10-06' }
                ],
                tarifSalon: '350 €',
                tarifNormal: '400 €',
                tarif: '',
                lien: 'https://www.idlabs.fr/fr/formations/ia-generative/decouvrir-l-intelligence-artificielle-et-s-initier-a-l-ia-generative'
            }
        ];

        const QUIZ_CATEGORIES = [
            {
                id: 'strategie',
                name: 'Vision & Stratégie',
                icon: '🧭',
                color: '#2292cb',
                desc: 'Alignement stratégique et leadership IA',
                questions: [
                    'Votre direction générale a-t-elle formalisé une stratégie ou une feuille de route IA ?',
                    'Des budgets dédiés à l\'IA ont-ils été alloués pour l\'exercice en cours ?',
                    'Disposez-vous d\'un responsable identifié (CDO, Chief AI Officer…) pour piloter l\'IA ?',
                    'L\'IA fait-elle partie des objectifs stratégiques communiqués en interne et/ou en externe ?'
                ]
            },
            {
                id: 'donnees',
                name: 'Données & Infrastructure',
                icon: '🗄️',
                color: '#152f7b',
                desc: 'Qualité, accessibilité et gouvernance des données',
                questions: [
                    'Vos données métiers sont-elles structurées, centralisées et accessibles (data warehouse, data lake) ?',
                    'Disposez-vous d\'une politique de gouvernance et de qualité des données ?',
                    'Vos systèmes sont-ils interconnectés via des API ou une architecture data moderne ?',
                    'Utilisez-vous des outils de BI ou d\'analytics avancés (Power BI, Tableau, Snowflake…) ?'
                ]
            },
            {
                id: 'usages',
                name: 'Usages & Outils IA',
                icon: '🛠️',
                color: '#e8922a',
                desc: 'Adoption opérationnelle de l\'IA dans les métiers',
                questions: [
                    'Des outils IA (copilotes, LLM, automatisation) sont-ils utilisés au quotidien dans vos équipes ?',
                    'Avez-vous des cas d\'usage IA en production (pas seulement en expérimentation) ?',
                    'L\'IA est-elle utilisée dans votre relation client (chatbot, recommandation, personnalisation) ?',
                    'Utilisez-vous l\'IA pour automatiser des processus internes (RPA, traitement de documents…) ?',
                    'Mesurez-vous le ROI ou l\'impact business des initiatives IA déployées ?'
                ]
            },
            {
                id: 'competences',
                name: 'Compétences & Culture',
                icon: '🧠',
                color: '#2eb87a',
                desc: 'Capital humain et culture d\'innovation',
                questions: [
                    'Vos équipes ont-elles reçu des formations spécifiques à l\'IA ou au prompt engineering ?',
                    'Disposez-vous de profils techniques IA en interne (data scientist, ML engineer…) ?',
                    'Existe-t-il une communauté interne ou un réseau d\'ambassadeurs IA dans votre organisation ?',
                    'La direction encourage-t-elle activement les expérimentations et le droit à l\'erreur autour de l\'IA ?'
                ]
            },
            {
                id: 'gouvernance',
                name: 'Processus & Gouvernance',
                icon: '⚙️',
                color: '#8b5cf6',
                desc: 'Cadre éthique, sécurité et conformité IA',
                questions: [
                    'Avez-vous une politique de sécurité et de confidentialité pour les outils IA (RGPD, données sensibles) ?',
                    'Disposez-vous d\'une charte ou d\'un cadre éthique encadrant l\'usage de l\'IA ?',
                    'Les risques liés à l\'IA (biais, hallucinations, dépendance fournisseur) sont-ils identifiés et gérés ?',
                    'Vos processus d\'achat ou de validation de solutions IA sont-ils formalisés ?'
                ]
            },
            {
                id: 'potentiel',
                name: 'Potentiel & Ambition',
                icon: '🚀',
                color: '#e03d3d',
                desc: 'Capacité à accélérer l\'adoption IA',
                questions: [
                    'Avez-vous identifié des cas d\'usage IA prioritaires à fort impact pour les 12 prochains mois ?',
                    'Êtes-vous en relation avec des partenaires, startups ou consultants spécialisés en IA ?',
                    'Votre organisation est-elle prête à faire évoluer ses processus et organisations autour de l\'IA ?',
                    'Votre direction est-elle prête à investir significativement dans l\'IA dans les 2 prochaines années ?'
                ]
            }
        ];

        const QUIZ_LEVELS = [
            {
                min: 0, max: 20,
                name: 'Observateur',
                emoji: '🌱',
                color: '#e03d3d',
                title: 'Vous débutez votre exploration IA',
                desc: 'Votre organisation en est aux prémices de l\'IA. C\'est le moment idéal pour poser les bases : sensibilisation, identification des cas d\'usage et cadrage stratégique.'
            },
            {
                min: 21, max: 40,
                name: 'Explorateur',
                emoji: '🔍',
                color: '#e8922a',
                title: 'Vous expérimentez les premiers cas d\'usage',
                desc: 'Des initiatives IA émergent, mais restent isolées. Il faut structurer la démarche : gouvernance des données, formation et alignement stratégique.'
            },
            {
                min: 41, max: 60,
                name: 'Adopteur',
                emoji: '⚡',
                color: '#2292cb',
                title: 'L\'IA s\'intègre dans vos opérations',
                desc: 'Vous avez des usages IA en production. L\'enjeu est de scaler : industrialiser les cas d\'usage, renforcer les compétences et mesurer le ROI.'
            },
            {
                min: 61, max: 80,
                name: 'Accélérateur',
                emoji: '🏎️',
                color: '#152f7b',
                title: 'L\'IA devient un avantage concurrentiel',
                desc: 'Votre maturité IA est avancée. Concentrez-vous sur l\'IA générative, l\'optimisation continue et l\'innovation produit pour creuser l\'écart.'
            },
            {
                min: 81, max: 100,
                name: 'Leader',
                emoji: '🏆',
                color: '#2eb87a',
                title: 'Vous êtes à l\'avant-garde de l\'IA',
                desc: 'Félicitations ! Votre organisation est parmi les plus matures. Vision claire, usages à impact, équipes compétentes et gouvernance robuste.'
            }
        ];

        const RECOMMENDATIONS = {
            strategie: [
                { tag: 'Quick Win', text: 'Organisez un atelier de co-construction de votre feuille de route IA avec la direction et les managers clés.' },
                { tag: 'Moyen terme', text: 'Nommez un référent IA transverse chargé de coordonner les initiatives et de piloter la transformation.' }
            ],
            donnees: [
                { tag: 'Fondation', text: 'Auditez vos sources de données existantes et identifiez les silos à connecter en priorité.' },
                { tag: 'Infrastructure', text: 'Investissez dans une plateforme data centralisée (cloud data warehouse) comme socle indispensable à tout projet IA.' }
            ],
            usages: [
                { tag: 'Expérimentation', text: 'Lancez 2–3 projets pilotes IA sur des processus à fort volume et faible risque pour créer des quick wins visibles.' },
                { tag: 'ROI', text: 'Définissez des KPIs clairs pour chaque initiative IA et mettez en place un tableau de bord de suivi.' }
            ],
            competences: [
                { tag: 'Formation', text: 'Déployez un programme de sensibilisation et de formation à l\'IA pour l\'ensemble des collaborateurs — ID Labs propose des parcours adaptés.' },
                { tag: 'Talent', text: 'Identifiez et formez des \'AI Champions\' dans chaque département pour diffuser les bonnes pratiques au quotidien.' }
            ],
            gouvernance: [
                { tag: 'Conformité', text: 'Rédigez une charte IA interne définissant les règles d\'usage, les données interdites et les bonnes pratiques RGPD.' },
                { tag: 'Sécurité', text: 'Effectuez une analyse de risques IA et mettez en place un processus de validation formelle des nouveaux outils.' }
            ],
            potentiel: [
                { tag: 'Opportunité', text: 'Organisez un hackathon interne pour identifier vos 5 cas d\'usage IA prioritaires à fort impact business.' },
                { tag: 'Partenariat', text: 'Engagez-vous avec des partenaires IA spécialisés pour accélérer votre montée en compétences — contactez ID Labs !' }
            ]
        };

        // ===== STATE MANAGEMENT =====
        let adminMode = false;
        let logoClickCount = 0;
        let logoClickTimer = null;

        let quizState = {
            leadData: {},
            currentCategory: 0,
            answers: {},
            xp: 0,
            totalQuestions: 0
        };

        // ===== STORAGE (localStorage) =====
        function saveData(key, data) {
            localStorage.setItem(key, JSON.stringify(data));
        }

        function loadData(key, defaultValue = null) {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : defaultValue;
        }

        function initStorage() {
            if (!loadData('formations_registrations')) {
                saveData('formations_registrations', {});
            }
            if (!loadData('quiz_results')) {
                saveData('quiz_results', []);
            }
        }

        // ===== FILE SYSTEM ACCESS API (sauvegarde hors ligne) =====
        // Sélection du dossier /data — aucun serveur, 100% hors ligne.
        let dataDirectoryHandle = null;

        function openIDB() {
            return new Promise((resolve, reject) => {
                const req = indexedDB.open('idlabs_fs', 2);
                req.onupgradeneeded = e => {
                    const db = e.target.result;
                    if (!db.objectStoreNames.contains('handles')) {
                        db.createObjectStore('handles');
                    }
                };
                req.onsuccess = e => resolve(e.target.result);
                req.onerror = e => reject(e.target.error);
            });
        }

        async function storeHandle(handle) {
            const db = await openIDB();
            return new Promise((resolve, reject) => {
                const tx = db.transaction('handles', 'readwrite');
                tx.objectStore('handles').put(handle, 'dataDir');
                tx.oncomplete = resolve;
                tx.onerror = e => reject(e.target.error);
            });
        }

        async function retrieveHandle() {
            const db = await openIDB();
            return new Promise((resolve, reject) => {
                const tx = db.transaction('handles', 'readonly');
                const req = tx.objectStore('handles').get('dataDir');
                req.onsuccess = e => resolve(e.target.result || null);
                req.onerror = e => reject(e.target.error);
            });
        }

        async function initFileAccess() {
            if (!('showDirectoryPicker' in window)) {
                showToast('Navigateur non compatible — utilisez Chrome ou Edge');
                return false;
            }
            try {
                const handle = await window.showDirectoryPicker({ mode: 'readwrite' });
                dataDirectoryHandle = handle;
                await storeHandle(handle);
                await loadFromDataFiles();
                updateFsStatus(true);
                showToast('Dossier connecté — sauvegarde automatique activée');
                return true;
            } catch (e) {
                if (e.name !== 'AbortError') console.error('File access error:', e);
                return false;
            }
        }

        async function restoreFileAccess() {
            try {
                const handle = await retrieveHandle();
                if (!handle) return;
                const perm = await handle.queryPermission({ mode: 'readwrite' });
                if (perm === 'granted') {
                    dataDirectoryHandle = handle;
                    await loadFromDataFiles();
                    updateFsStatus(true);
                } else if (perm === 'prompt') {
                    dataDirectoryHandle = handle;
                    updateFsStatus(false, true);
                }
            } catch (e) {
                // IndexedDB non disponible ou handle invalide
            }
        }

        async function ensureFilePermission() {
            if (!dataDirectoryHandle) return false;
            const perm = await dataDirectoryHandle.queryPermission({ mode: 'readwrite' });
            if (perm === 'granted') return true;
            const newPerm = await dataDirectoryHandle.requestPermission({ mode: 'readwrite' });
            if (newPerm === 'granted') { updateFsStatus(true); return true; }
            return false;
        }

        // Charge les données des fichiers JSON dans localStorage (source de vérité = fichiers)
        async function loadFromDataFiles() {
            if (!dataDirectoryHandle) return;
            try {
                const ok = await ensureFilePermission();
                if (!ok) return;

                try {
                    const fh = await dataDirectoryHandle.getFileHandle('formations_registrations.json');
                    const file = await fh.getFile();
                    const data = JSON.parse(await file.text());
                    if (data && typeof data === 'object' && !Array.isArray(data)) {
                        saveData('formations_registrations', data);
                    }
                } catch (e) { /* fichier absent ou invalide */ }

                try {
                    const fh = await dataDirectoryHandle.getFileHandle('quiz_results.json');
                    const file = await fh.getFile();
                    const data = JSON.parse(await file.text());
                    if (data && Array.isArray(data)) {
                        saveData('quiz_results', data);
                    }
                } catch (e) { /* fichier absent ou invalide */ }

                const page = detectCurrentPage();
                if (page === 'formations') renderFormations();
                if (page === 'admin') updateAdminPanel();
            } catch (e) {
                console.error('Erreur lecture fichiers JSON:', e.message);
            }
        }

        async function syncToDataFile(filename, data) {
            if (!dataDirectoryHandle) return;
            try {
                const ok = await ensureFilePermission();
                if (!ok) return;
                const fileHandle = await dataDirectoryHandle.getFileHandle(filename, { create: true });
                const writable = await fileHandle.createWritable();
                await writable.write(JSON.stringify(data, null, 2));
                await writable.close();
            } catch (e) {
                console.error('Erreur écriture ' + filename + ':', e.message);
            }
        }

        function updateFsStatus(connected, pending) {
            const btn = document.getElementById('fsConnectBtn');
            const status = document.getElementById('fsStatus');
            if (btn) {
                btn.textContent = connected ? 'Dossier /data connecté' : 'Connecter le dossier /data';
                btn.style.background = connected ? '#22c55e' : '';
                btn.style.color = connected ? '#fff' : '';
            }
            if (status) {
                if (connected) {
                    status.textContent = 'Sauvegarde automatique active';
                    status.style.color = '#22c55e';
                } else if (pending) {
                    status.textContent = 'Permission requise au premier enregistrement';
                    status.style.color = '#f59e0b';
                } else {
                    status.textContent = 'Non connecté';
                    status.style.color = '#ef4444';
                }
            }
        }

        // ===== PAGE DETECTION =====
        function detectCurrentPage() {
            // Detect which page we're on by checking which elements exist
            if (document.getElementById('formationGrid')) return 'formations';
            if (document.getElementById('quizLeadForm')) return 'quiz';
            if (document.getElementById('adminFormationList')) return 'admin';
            return 'landing';
        }

        // ===== ADMIN MODE =====
        function setupAdminMode() {
            const logoContainer = document.getElementById('logoContainer');
            const adminBtn = document.getElementById('adminBtn');

            if (logoContainer) {
                logoContainer.addEventListener('click', function() {
                    logoClickCount++;
                    clearTimeout(logoClickTimer);

                    if (logoClickCount === 3) {
                        adminMode = !adminMode;
                        if (adminBtn) adminBtn.classList.toggle('visible', adminMode);
                        logoClickCount = 0;
                        if (adminMode) showToast('Admin mode activé');
                    }

                    logoClickTimer = setTimeout(() => {
                        logoClickCount = 0;
                    }, 500);
                });
            }

            if (adminBtn) {
                adminBtn.addEventListener('click', function() {
                    window.location.href = 'admin.html';
                });
            }
        }

        // Handle Ctrl+Shift+A shortcut to go to admin page
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.shiftKey && e.code === 'KeyA') {
                window.location.href = 'admin.html';
            }
        });

        // ===== FORMATIONS PAGE =====
        function getSessionRegs(sessionId) {
            const regs = loadData('formations_registrations', {});
            return (regs[sessionId] || []).length;
        }

        function buildSessionRow(session, avatarColor) {
            const count = getSessionRegs(session.id);
            const isFull = count >= 8;
            const remaining = 8 - count;
            const few = remaining <= 3 && remaining > 0;

            let dotsHtml = '';
            for (let i = 0; i < 8; i++) {
                const taken = i < count;
                const warnClass = (isFull || few) && taken ? ' warn' : '';
                dotsHtml += `<span class="dot${taken ? ' taken' + warnClass : ''}"></span>`;
            }

            let statusText = '';
            let statusClass = '';
            const waitlist = count - 8;
            if (isFull) {
                statusText = waitlist > 0
                    ? `Complet — ${waitlist} en liste d'attente`
                    : 'Complet — liste d\'attente ouverte';
                statusClass = 'full';
            } else if (few) {
                statusText = `${remaining} place${remaining > 1 ? 's' : ''} restante${remaining > 1 ? 's' : ''}`;
                statusClass = 'few';
            } else {
                statusText = `${remaining} places restantes`;
                statusClass = '';
            }

            return `
                <div class="session-row">
                    <div class="session-date">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                        <span>${session.label}</span>
                    </div>
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
                // Avatar: photo or initials
                const avatarContent = f.photo
                    ? `<img src="${f.photo}" alt="${f.trainer}" style="width: 100%; height: 100%; object-fit: cover;">`
                    : f.initials;

                const avatarStyle = f.photo
                    ? 'overflow: hidden;'
                    : `background: ${f.avatarColor};`;

                // Tag color
                const tagStyle = `background: ${f.avatarColor}12; color: ${f.avatarColor};`;

                // Price block (visual, prominent)
                let priceHtml = '';
                if (f.tarifSalon && f.tarifNormal) {
                    const salonNum = parseInt(f.tarifSalon);
                    const normalNum = parseInt(f.tarifNormal);
                    const economie = normalNum - salonNum;
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

                // Build session rows
                const sessionsHtml = f.sessions.map(s => buildSessionRow(s, f.avatarColor)).join('');

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

        function openFormationModal(sessionId) {
            // Find the formation and session from sessionId
            let formation = null;
            let session = null;
            for (const f of FORMATIONS) {
                const s = f.sessions.find(sess => sess.id === sessionId);
                if (s) {
                    formation = f;
                    session = s;
                    break;
                }
            }
            if (!formation || !session) return;

            const regs = loadData('formations_registrations', {});
            const count = (regs[sessionId] || []).length;
            const isFull = count >= 8;

            // Info chips
            const remaining = 8 - count;
            let priceChip = '';
            if (formation.tarifSalon && formation.tarifNormal) {
                priceChip = `<div class="modal-info-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg><strong style="color:var(--primary)">${formation.tarifSalon}</strong>&nbsp;<span style="color:#bbb;text-decoration:line-through">${formation.tarifNormal}</span></div>`;
            } else if (formation.tarif) {
                priceChip = `<div class="modal-info-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>${formation.tarif}</div>`;
            }

            const statusChip = isFull
                ? `<div class="modal-info-chip status-full"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>Liste d'attente</div>`
                : `<div class="modal-info-chip status-available"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>${remaining} place${remaining > 1 ? 's' : ''}</div>`;

            let modalBody = `
                <div class="modal-body-inner">
                    <div class="success-message" style="display: none;" id="regSuccess"></div>

                    <div class="modal-info-bar">
                        <div class="modal-info-chip">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                            ${session.label}
                        </div>
                        ${priceChip}
                        ${statusChip}
                    </div>

                    ${formation.objectifs.length > 0 ? `
                        <div class="modal-objectives">
                            ${formation.objectifs.map(obj => `<span class="modal-objective-tag">${obj}</span>`).join('')}
                        </div>
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

            document.getElementById('formationForm').addEventListener('submit', function(e) {
                e.preventDefault();

                const formData = new FormData(this);
                const registration = {
                    nom: formData.get('nom'),
                    prenom: formData.get('prenom'),
                    email: formData.get('email'),
                    telephone: formData.get('telephone'),
                    entreprise: formData.get('entreprise'),
                    formationId: formation.id,
                    sessionLabel: session.label,
                    date: new Date().toISOString()
                };

                const regs = loadData('formations_registrations', {});
                if (!regs[sessionId]) {
                    regs[sessionId] = [];
                }
                regs[sessionId].push(registration);
                saveData('formations_registrations', regs);
                syncToDataFile('formations_registrations.json', regs);

                document.getElementById('regSuccess').textContent = `Inscription confirmée pour ${registration.prenom} ${registration.nom} — session du ${session.label}!`;
                document.getElementById('regSuccess').style.display = 'block';
                document.getElementById('formationForm').style.display = 'none';

                setTimeout(() => {
                    closeModal();
                    renderFormations();
                    showToast(`Inscription enregistrée pour ${formation.trainer} (${session.label})`);
                }, 2000);
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

            const startBtn = document.getElementById('startQuizBtn');
            const newQuizBtn = document.getElementById('newQuizBtn');
            const downloadBtn = document.getElementById('downloadDiplomaBtn');

            if (startBtn) startBtn.addEventListener('click', startQuiz);
            if (newQuizBtn) newQuizBtn.addEventListener('click', resetQuiz);
            if (downloadBtn) downloadBtn.addEventListener('click', downloadDiploma);

            renderDimensionDots();
        }

        function startQuiz() {
            // Validate lead form
            const nom = document.getElementById('leadNom').value.trim();
            const prenom = document.getElementById('leadPrenom').value.trim();
            const email = document.getElementById('leadEmail').value.trim();
            const entreprise = document.getElementById('leadEntreprise').value.trim();

            if (!nom || !prenom || !email || !entreprise) {
                showToast('Veuillez remplir tous les champs obligatoires');
                return;
            }

            quizState.leadData = {
                nom,
                prenom,
                email,
                entreprise,
                secteur: document.getElementById('leadSecteur').value || 'N/A',
                taille: document.getElementById('leadTaille').value || 'N/A',
                fonction: document.getElementById('leadFonction').value || 'N/A'
            };

            quizState.currentCategory = 0;
            quizState.answers = {};
            quizState.xp = 0;

            document.getElementById('quizLeadForm').style.display = 'none';
            document.getElementById('quizProgress').style.display = 'block';
            document.getElementById('resultsPage').style.display = 'none';

            renderQuizSections();
            showQuizSection(0);
        }

        function renderDimensionDots() {
            const dotsContainer = document.getElementById('dimensionDots');
            if (!dotsContainer) return;

            dotsContainer.innerHTML = QUIZ_CATEGORIES.map((cat, idx) => {
                return `<div class="dimension-dot" data-dim="${idx}"></div>`;
            }).join('');
        }

        function renderQuizSections() {
            const container = document.getElementById('quizSections');
            if (!container) return;

            container.innerHTML = QUIZ_CATEGORIES.map((cat, catIdx) => {
                return `
                    <div class="quiz-section" data-category="${catIdx}">
                        <div class="section-header">
                            <div class="section-icon">${cat.icon}</div>
                            <div class="section-name">${cat.name}</div>
                            <div class="section-desc">${cat.desc}</div>
                        </div>

                        <div id="questions-${catIdx}">
                            ${cat.questions.map((q, qIdx) => `
                                <div class="question-block">
                                    <div class="question-text">
                                        ${qIdx + 1}. ${q}
                                    </div>
                                    <div class="scale-buttons">
                                        <button type="button" class="scale-btn" data-value="1" data-cat="${catIdx}" data-q="${qIdx}" title="Pas du tout">Pas du<br>tout</button>
                                        <button type="button" class="scale-btn" data-value="2" data-cat="${catIdx}" data-q="${qIdx}">Plutôt<br>non</button>
                                        <button type="button" class="scale-btn" data-value="3" data-cat="${catIdx}" data-q="${qIdx}">Neutre</button>
                                        <button type="button" class="scale-btn" data-value="4" data-cat="${catIdx}" data-q="${qIdx}">Plutôt<br>oui</button>
                                        <button type="button" class="scale-btn" data-value="5" data-cat="${catIdx}" data-q="${qIdx}" title="Totalement">Totale-<br>ment</button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>

                        <div class="section-nav">
                            <button type="button" class="section-btn prev" onclick="previousSection()" ${catIdx === 0 ? 'disabled' : ''}>← Précédent</button>
                            <button type="button" class="section-btn next" onclick="nextSection()">
                                ${catIdx === QUIZ_CATEGORIES.length - 1 ? 'Voir les Résultats' : 'Suivant →'}
                            </button>
                        </div>
                    </div>
                `;
            }).join('');

            // Attach event listeners to scale buttons
            document.querySelectorAll('.scale-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const cat = this.dataset.cat;
                    const q = this.dataset.q;
                    const value = this.dataset.value;

                    // Deselect other buttons for this question
                    document.querySelectorAll(`.scale-btn[data-cat="${cat}"][data-q="${q}"]`).forEach(b => {
                        b.classList.remove('selected');
                    });

                    // Select this button
                    this.classList.add('selected');

                    // Store answer
                    const key = `${cat}-${q}`;
                    quizState.answers[key] = parseInt(value);

                    updateProgress();
                });
            });

            // Restore previous answers
            for (const key in quizState.answers) {
                const [cat, q] = key.split('-');
                const value = quizState.answers[key];
                const btn = document.querySelector(`.scale-btn[data-cat="${cat}"][data-q="${q}"][data-value="${value}"]`);
                if (btn) btn.classList.add('selected');
            }
        }

        function showQuizSection(idx) {
            document.querySelectorAll('.quiz-section').forEach((sec, i) => {
                sec.classList.toggle('active', i === idx);
            });

            const currentSec = document.getElementById('currentSection');
            if (currentSec) currentSec.textContent = idx + 1;
            updateDimensionDots();
        }

        function nextSection() {
            const cat = quizState.currentCategory;
            const cat_q_count = QUIZ_CATEGORIES[cat].questions.length;

            // Check if all questions in this category are answered
            let allAnswered = true;
            for (let i = 0; i < cat_q_count; i++) {
                if (!quizState.answers[`${cat}-${i}`]) {
                    allAnswered = false;
                    break;
                }
            }

            if (!allAnswered) {
                showToast('Veuillez répondre à toutes les questions de cette section');
                return;
            }

            if (cat < QUIZ_CATEGORIES.length - 1) {
                quizState.currentCategory++;
                showQuizSection(quizState.currentCategory);
            } else {
                // Quiz complete
                calculateResults();
            }
        }

        function previousSection() {
            if (quizState.currentCategory > 0) {
                quizState.currentCategory--;
                showQuizSection(quizState.currentCategory);
            }
        }

        function updateProgress() {
            const answered = Object.keys(quizState.answers).length;
            const percentage = (answered / quizState.totalQuestions) * 100;
            const progressFill = document.getElementById('progressFill');
            if (progressFill) progressFill.style.width = percentage + '%';

            quizState.xp = Math.floor(answered * 20); // 20 XP per question
            const xpCounter = document.getElementById('xpCounter');
            if (xpCounter) xpCounter.textContent = quizState.xp + ' / 500';
        }

        function updateDimensionDots() {
            document.querySelectorAll('.dimension-dot').forEach((dot, idx) => {
                dot.classList.toggle('active', idx === quizState.currentCategory);

                // Check if all questions in this category are answered
                const cat_q_count = QUIZ_CATEGORIES[idx].questions.length;
                let allAnswered = true;
                for (let i = 0; i < cat_q_count; i++) {
                    if (!quizState.answers[`${idx}-${i}`]) {
                        allAnswered = false;
                        break;
                    }
                }
                dot.classList.toggle('completed', allAnswered);
            });
        }

        function calculateResults() {
            // Calculate scores per dimension
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

                const avgScore = catCount > 0 ? (catScore / (catCount * 5)) * 100 : 0;
                dimensionScores[cat.id] = Math.round(avgScore);
                totalScore += avgScore;
            });

            const finalScore = Math.round(totalScore / QUIZ_CATEGORIES.length);

            // Save result
            const results = loadData('quiz_results', []);
            results.push({
                leadData: quizState.leadData,
                dimensionScores,
                finalScore,
                date: new Date().toISOString()
            });
            saveData('quiz_results', results);
            syncToDataFile('quiz_results.json', results);

            // Display results
            showResults(finalScore, dimensionScores);
        }

        function showResults(score, dimensionScores) {
            const level = QUIZ_LEVELS.find(l => score >= l.min && score <= l.max);

            // Hide quiz sections and show results
            const quizProgress = document.getElementById('quizProgress');
            if (quizProgress) quizProgress.style.display = 'none';
            document.querySelectorAll('.quiz-section').forEach(s => s.classList.remove('active'));
            const resultsPage = document.getElementById('resultsPage');
            if (resultsPage) resultsPage.style.display = 'block';

            // Populate results
            const resultName = document.getElementById('resultName');
            if (resultName) resultName.textContent = `${quizState.leadData.prenom} ${quizState.leadData.nom}`;

            const scoreRing = document.getElementById('scoreRing');
            if (scoreRing) {
                scoreRing.textContent = score;
                scoreRing.style.background = level.color;
                scoreRing.style.color = 'white';
            }

            const levelName = document.getElementById('levelName');
            if (levelName) levelName.textContent = level.name;
            const levelTitle = document.getElementById('levelTitle');
            if (levelTitle) levelTitle.textContent = level.title;
            const levelDesc = document.getElementById('levelDesc');
            if (levelDesc) levelDesc.textContent = level.desc;

            // Dimension scores
            const scoresContainer = document.getElementById('dimensionScores');
            if (scoresContainer) {
                scoresContainer.innerHTML = QUIZ_CATEGORIES.map(cat => {
                    const score = dimensionScores[cat.id];
                    return `
                        <div class="dimension-item" style="border-left-color: ${cat.color};">
                            <div class="dimension-item-name" style="color: ${cat.color};">${cat.name}</div>
                            <div class="dimension-item-bar">
                                <div class="dimension-item-fill" style="width: 0%; background: ${cat.color};" data-target="${score}"></div>
                            </div>
                            <div class="dimension-item-score">${score}/100</div>
                        </div>
                    `;
                }).join('');

                // Animate dimension scores
                setTimeout(() => {
                    document.querySelectorAll('.dimension-item-fill').forEach(el => {
                        const target = parseInt(el.dataset.target);
                        el.style.width = target + '%';
                    });
                }, 100);
            }

            // Draw radar chart
            drawRadarChart(dimensionScores);

            // Recommendations
            const recosContainer = document.getElementById('recosGrid');
            if (recosContainer) {
                recosContainer.innerHTML = '';
                QUIZ_CATEGORIES.forEach(cat => {
                    const recos = RECOMMENDATIONS[cat.id] || [];
                    recos.forEach(reco => {
                        recosContainer.innerHTML += `
                            <div class="reco-card">
                                <div class="reco-tag" style="background: ${cat.color};">${reco.tag}</div>
                                <div class="reco-text">${reco.text}</div>
                            </div>
                        `;
                    });
                });
            }

            // Draw diploma
            drawDiploma(score, level);
        }

        function drawRadarChart(dimensionScores) {
            const canvas = document.getElementById('radarChart');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const maxRadius = 120;

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const angles = [];
            for (let i = 0; i < QUIZ_CATEGORIES.length; i++) {
                angles.push((i / QUIZ_CATEGORIES.length) * Math.PI * 2 - Math.PI / 2);
            }

            // Draw concentric circles
            ctx.strokeStyle = '#e0e0e0';
            ctx.lineWidth = 1;
            for (let i = 20; i <= 100; i += 20) {
                const radius = (i / 100) * maxRadius;
                ctx.beginPath();
                for (let j = 0; j < QUIZ_CATEGORIES.length; j++) {
                    const x = centerX + radius * Math.cos(angles[j]);
                    const y = centerY + radius * Math.sin(angles[j]);
                    if (j === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.stroke();

                // Labels
                if (i === 100) {
                    ctx.fillStyle = '#999';
                    ctx.font = 'bold 11px sans-serif';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                }
            }

            // Draw axes
            ctx.strokeStyle = '#999';
            ctx.lineWidth = 1;
            for (let i = 0; i < QUIZ_CATEGORIES.length; i++) {
                const x = centerX + maxRadius * Math.cos(angles[i]);
                const y = centerY + maxRadius * Math.sin(angles[i]);
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(x, y);
                ctx.stroke();
            }

            // Draw data polygon
            ctx.fillStyle = 'rgba(64, 162, 212, 0.2)';
            ctx.strokeStyle = '#2292cb';
            ctx.lineWidth = 2;
            ctx.beginPath();
            for (let i = 0; i < QUIZ_CATEGORIES.length; i++) {
                const cat = QUIZ_CATEGORIES[i];
                const score = dimensionScores[cat.id] / 100;
                const radius = score * maxRadius;
                const x = centerX + radius * Math.cos(angles[i]);
                const y = centerY + radius * Math.sin(angles[i]);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Draw points
            ctx.fillStyle = '#2292cb';
            for (let i = 0; i < QUIZ_CATEGORIES.length; i++) {
                const cat = QUIZ_CATEGORIES[i];
                const score = dimensionScores[cat.id] / 100;
                const radius = score * maxRadius;
                const x = centerX + radius * Math.cos(angles[i]);
                const y = centerY + radius * Math.sin(angles[i]);
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, Math.PI * 2);
                ctx.fill();
            }

            // Labels
            ctx.fillStyle = '#333';
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            for (let i = 0; i < QUIZ_CATEGORIES.length; i++) {
                const cat = QUIZ_CATEGORIES[i];
                const labelRadius = maxRadius + 30;
                const x = centerX + labelRadius * Math.cos(angles[i]);
                const y = centerY + labelRadius * Math.sin(angles[i]);
                ctx.fillText(cat.icon, x, y);
            }
        }

        function drawDiploma(score, level) {
            const canvas = document.getElementById('diplomaCanvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');

            // Background
            ctx.fillStyle = '#f5f0e1';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Border
            ctx.strokeStyle = '#8b7635';
            ctx.lineWidth = 3;
            ctx.strokeRect(15, 15, canvas.width - 30, canvas.height - 30);

            ctx.strokeStyle = '#c5a55a';
            ctx.lineWidth = 1;
            ctx.strokeRect(25, 25, canvas.width - 50, canvas.height - 50);

            // Header
            ctx.fillStyle = '#8b7635';
            ctx.font = 'bold 32px Georgia, serif';
            ctx.textAlign = 'center';
            ctx.fillText('ID LABS', canvas.width / 2, 70);

            // Title
            ctx.font = 'bold 28px Georgia, serif';
            ctx.fillStyle = '#333';
            ctx.fillText('Diplôme d\'Intelligence Artificielle', canvas.width / 2, 130);

            // Subtitle
            ctx.font = 'bold 20px Georgia, serif';
            ctx.fillStyle = level.color;
            const subtitles = {
                'Observateur': 'INITIATION EN IA',
                'Explorateur': 'EXPLORATION EN IA',
                'Adopteur': 'ADOPTION EN IA',
                'Accélérateur': 'MAÎTRISE EN IA',
                'Leader': 'LEADERSHIP EN IA'
            };
            ctx.fillText(subtitles[level.name] || level.name, canvas.width / 2, 170);

            // Divider
            ctx.strokeStyle = '#c5a55a';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(100, 200);
            ctx.lineTo(canvas.width - 100, 200);
            ctx.stroke();

            // Certificate text
            ctx.font = '16px Georgia, serif';
            ctx.fillStyle = '#333';
            ctx.textAlign = 'center';
            ctx.fillText('est fièrement décerné à', canvas.width / 2, 240);

            // Name
            ctx.font = 'bold 32px Georgia, serif';
            ctx.fillStyle = level.color;
            ctx.fillText(`${quizState.leadData.prenom} ${quizState.leadData.nom}`, canvas.width / 2, 310);

            // Achievement text
            ctx.font = '14px Georgia, serif';
            ctx.fillStyle = '#333';
            const textWidth = canvas.width - 100;
            const lines = [
                'pour avoir accompli avec brio le diagnostic de maturité IA',
                'et démontré une excellente compréhension des enjeux'
            ];
            let y = 360;
            lines.forEach(line => {
                ctx.fillText(line, canvas.width / 2, y);
                y += 24;
            });

            // Mention
            ctx.font = 'bold 16px Georgia, serif';
            ctx.fillStyle = level.color;
            const mentions = {
                'Observateur': 'MENTION ENCOURAGEMENT',
                'Explorateur': 'MENTION HONORABLE',
                'Adopteur': 'MENTION TRÈS HONORABLE',
                'Accélérateur': 'MENTION TRÈS HONORABLE',
                'Leader': 'MENTION EXCELLENCE'
            };
            ctx.fillText(mentions[level.name] || 'MENTION SPÉCIALE', canvas.width / 2, 450);

            // Footer divider
            ctx.strokeStyle = '#c5a55a';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(100, 500);
            ctx.lineTo(canvas.width - 100, 500);
            ctx.stroke();

            // Signatures
            ctx.font = '12px Georgia, serif';
            ctx.fillStyle = '#666';
            ctx.textAlign = 'left';
            ctx.fillText('L\'équipe ID Labs', 50, 550);

            ctx.textAlign = 'center';
            const today = new Date();
            const dateStr = `Caen, France · ${today.getDate()} avril 2026`;
            ctx.fillText(dateStr, canvas.width / 2, 550);

            ctx.textAlign = 'right';
            ctx.fillText('Jean-Baptiste Bodard / IDLABS', canvas.width - 50, 550);

            // Decorative seal
            ctx.fillStyle = 'rgba(197, 165, 90, 0.3)';
            ctx.beginPath();
            ctx.arc(canvas.width - 100, canvas.height - 100, 40, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = '#c5a55a';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.font = 'bold 12px Georgia, serif';
            ctx.fillStyle = '#8b7635';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('2026', canvas.width - 100, canvas.height - 100);
        }

        function downloadDiploma() {
            const canvas = document.getElementById('diplomaCanvas');
            if (!canvas) return;
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = `Diplome_IA_${quizState.leadData.prenom}_${quizState.leadData.nom}.png`;
            link.click();
            showToast('Diplôme téléchargé');
        }

        function resetQuiz() {
            const leadForm = document.getElementById('quizLeadForm');
            const quizProgress = document.getElementById('quizProgress');
            const resultsPage = document.getElementById('resultsPage');

            if (leadForm) leadForm.style.display = 'block';
            if (quizProgress) quizProgress.style.display = 'none';
            if (resultsPage) resultsPage.style.display = 'none';

            // Reset form
            const leadNom = document.getElementById('leadNom');
            const leadPrenom = document.getElementById('leadPrenom');
            const leadEmail = document.getElementById('leadEmail');
            const leadEntreprise = document.getElementById('leadEntreprise');
            const leadSecteur = document.getElementById('leadSecteur');
            const leadTaille = document.getElementById('leadTaille');
            const leadFonction = document.getElementById('leadFonction');

            if (leadNom) leadNom.value = '';
            if (leadPrenom) leadPrenom.value = '';
            if (leadEmail) leadEmail.value = '';
            if (leadEntreprise) leadEntreprise.value = '';
            if (leadSecteur) leadSecteur.value = '';
            if (leadTaille) leadTaille.value = '';
            if (leadFonction) leadFonction.value = '';

            quizState = {
                leadData: {},
                currentCategory: 0,
                answers: {},
                xp: 0,
                totalQuestions: quizState.totalQuestions
            };
        }

        // ===== ADMIN PANEL =====
        function updateAdminPanel() {
            const quizResults = loadData('quiz_results', []);
            const quizCount = document.getElementById('quizCount');
            if (quizCount) quizCount.textContent = quizResults.length;

            const regs = loadData('formations_registrations', {});
            const list = document.getElementById('adminFormationList');
            if (list) {
                list.innerHTML = FORMATIONS.map(f => {
                    const sessionsHtml = f.sessions.map(s => {
                        const count = (regs[s.id] || []).length;
                        return `
                            <div class="formation-stat" style="margin-left: 16px;">
                                <div class="formation-stat-name" style="font-size: 13px; color: #666;">${s.label}</div>
                                <div class="formation-stat-count">${count} / 8</div>
                            </div>
                        `;
                    }).join('');
                    return `
                        <div style="margin-bottom: 12px;">
                            <div class="formation-stat">
                                <div class="formation-stat-name" style="font-weight: 700;">${f.trainer} — ${f.tag}</div>
                            </div>
                            ${sessionsHtml}
                        </div>
                    `;
                }).join('');
            }
        }

        // Setup admin page exports
        function setupAdminPage() {
            // CSV Formations
            const exportFormationsCsvBtn = document.getElementById('exportFormationsCsvBtn');
            if (exportFormationsCsvBtn) {
                exportFormationsCsvBtn.addEventListener('click', function() {
                    const regs = loadData('formations_registrations', {});
                    let csv = 'Formation,Formateur,Session,Nom,Prénom,Email,Téléphone,Entreprise,Date Inscription\n';
                    for (const sessionId in regs) {
                        let formationName = '', trainerName = '', sessionLabel = '';
                        for (const f of FORMATIONS) {
                            const s = f.sessions.find(sess => sess.id === sessionId);
                            if (s) { formationName = f.title; trainerName = f.trainer; sessionLabel = s.label; break; }
                        }
                        regs[sessionId].forEach(reg => {
                            csv += `"${formationName}","${trainerName}","${sessionLabel}","${reg.nom}","${reg.prenom}","${reg.email}","${reg.telephone || ''}","${reg.entreprise}","${new Date(reg.date).toLocaleString()}"\n`;
                        });
                    }
                    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = 'formations_inscriptions.csv';
                    link.click();
                    showToast('Export formations CSV téléchargé');
                });
            }

            // CSV Quiz
            const exportQuizCsvBtn = document.getElementById('exportQuizCsvBtn');
            if (exportQuizCsvBtn) {
                exportQuizCsvBtn.addEventListener('click', function() {
                    const quizResults = loadData('quiz_results', []);
                    let csv = 'Nom,Prénom,Email,Entreprise,Secteur,Taille,Fonction,Score,Date\n';
                    quizResults.forEach(r => {
                        const ld = r.leadData;
                        csv += `"${ld.nom}","${ld.prenom}","${ld.email}","${ld.entreprise}","${ld.secteur || ''}","${ld.taille || ''}","${ld.fonction || ''}",${r.finalScore},"${new Date(r.date).toLocaleString()}"\n`;
                    });
                    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = 'quiz_resultats.csv';
                    link.click();
                    showToast('Export quiz CSV téléchargé');
                });
            }

            // File System Access
            const fsConnectBtn = document.getElementById('fsConnectBtn');
            if (fsConnectBtn) {
                fsConnectBtn.addEventListener('click', initFileAccess);
            }
        }

        // ===== UTILITIES =====
        function showToast(message) {
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.textContent = message;
            document.body.appendChild(toast);

            setTimeout(() => {
                toast.remove();
            }, 3000);
        }

        // ===== INITIALIZATION =====
        document.addEventListener('DOMContentLoaded', function() {
            const currentPage = detectCurrentPage();

            initStorage();
            setupAdminMode();
            restoreFileAccess();

            if (currentPage === 'formations') {
                renderFormations();
            } else if (currentPage === 'quiz') {
                initQuiz();
            } else if (currentPage === 'admin') {
                updateAdminPanel();
                setupAdminPage();
                // Make admin button visible on admin page
                const adminBtn = document.getElementById('adminBtn');
                if (adminBtn) adminBtn.classList.add('visible');
            }
        });
