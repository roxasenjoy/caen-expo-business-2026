        // ===== CONFIGURATION DATA =====
        const FORMATIONS = [
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
                    { id: 'jb_s1', label: '4 juin 2026', date: '2026-06-04', lieu: 'Douvres', salle: 'NK Vision' },
                    { id: 'jb_s2', label: '6 octobre 2026', date: '2026-10-06', lieu: 'Douvres', salle: 'NK Vision' }
                ],
                tarifSalon: '350 €',
                tarifNormal: '400 €',
                tarif: '',
                lien: 'https://www.idlabs.fr/fr/formations/ia-generative/decouvrir-l-intelligence-artificielle-et-s-initier-a-l-ia-generative'
            },
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
                    { id: 'timothee_s1', label: '9 juin 2026', date: '2026-06-09', lieu: 'Douvres', salle: 'NK Vision' },
                    { id: 'timothee_s2', label: '10 septembre 2026', date: '2026-09-10', lieu: 'Douvres', salle: 'NK Vision' }
                ],
                tarifSalon: '350 €',
                tarifNormal: '400 €',
                tarif: '',
                lien: 'https://www.idlabs.fr/fr/experts/timothee-laisne'
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
                    { id: 'stephanie_s1', label: '25-26 juin 2026', date: '2026-06-25', lieu: 'Douvres', salle: 'NK Vision' },
                    { id: 'stephanie_s2', label: '21-22 septembre 2026', date: '2026-09-21', lieu: 'Douvres', salle: 'NK Vision' }
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
                    { id: 'cecile_s1', label: '11 juin 2026', date: '2026-06-11', lieu: 'Caen', salle: 'Bananerie' },
                    { id: 'cecile_s2', label: '17 septembre 2026', date: '2026-09-17', lieu: 'Caen', salle: 'Bananerie' }
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
                    { id: 'cedric_s1', label: '16 juin 2026', date: '2026-06-16', lieu: 'Colombelles', salle: 'Forum Digital' },
                    { id: 'cedric_s2', label: '1er octobre 2026', date: '2026-10-01', lieu: 'Colombelles', salle: 'Forum Digital' }
                ],
                tarifSalon: '380 €',
                tarifNormal: '450 €',
                tarif: '',
                lien: 'https://www.idlabs.fr/fr/formations/digital-en-entreprise/automatisez-vos-taches-avec-make-et-l-ia'
            }
        ];

        const QUIZ_CATEGORIES = [
            {
                id: 'strategie',
                name: 'Vision & Stratégie',
                icon: '🧭',
                color: '#2292cb',
                desc: 'Évaluation de votre posture stratégique',
                questions: [
                    'Votre direction a-t-elle formalisé une feuille de route IA avec des jalons clairs ?',
                    'Un budget dédié aux initiatives IA a-t-il été alloué dans votre structure ?',
                    'Un responsable est-il officiellement désigné pour piloter votre transformation IA ?',
                    'L\'intelligence artificielle est-elle inscrite dans vos objectifs stratégiques officiels ?'
                ]
            },
            {
                id: 'donnees',
                name: 'Données & Infrastructure',
                icon: '🗄️',
                color: '#152f7b',
                desc: 'Audit de vos fondations data',
                questions: [
                    'Vos données métiers sont-elles centralisées et accessibles facilement à vos équipes ?',
                    'Une politique de gouvernance des données est-elle active et respectée dans votre organisation ?',
                    'Les outils numériques en place permettent d\'envisager une intégration progressive de solutions IA ?',
                    'L\'entreprise dispose d\'outils d\'analyse, de reporting ou de business intelligence déjà utilisés par les équipes.'
                ]
            },
            {
                id: 'usages',
                name: 'Usages & Outils IA',
                icon: '🛠️',
                color: '#e8922a',
                desc: 'Analyse de vos opérations terrain',
                questions: [
                    'Des outils IA sont-ils activement utilisés au quotidien par vos équipes ?',
                    'Savez-vous précisément quels outils d\'IA générative sont actuellement utilisés par vos collaborateurs ?',
                    'Avez-vous identifié plusieurs cas d\'usage IA à fort potentiel pour votre activité ?',
                    'L\'IA automatise-t-elle des processus internes dans votre organisation ?',
                    'Mesurez-vous le retour sur investissement de vos projets IA ?'
                ]
            },
            {
                id: 'competences',
                name: 'Compétences & Culture',
                icon: '🧠',
                color: '#2eb87a',
                desc: 'Évaluation du capital humain IA',
                questions: [
                    'Vos collaborateurs ont-ils bénéficié de formations IA ou de prompt engineering ?',
                    'Des profils techniques spécialisés en IA existent-ils au sein de votre structure ?',
                    'Des ambassadeurs IA relaient-ils activement les bonnes pratiques dans vos équipes ?',
                    'Votre direction encourage-t-elle et finance-t-elle l\'expérimentation IA au quotidien ?'
                ]
            },
            {
                id: 'gouvernance',
                name: 'Processus & Gouvernance',
                icon: '⚙️',
                color: '#8b5cf6',
                desc: 'Audit des protocoles et conformité',
                questions: [
                    'Une politique de sécurité encadre-t-elle formellement l\'usage de vos outils IA ?',
                    'Votre organisation dispose-t-elle d\'une charte éthique régissant l\'usage de l\'IA ?',
                    'Les risques IA — biais algorithmiques, hallucinations — sont-ils identifiés et contrôlés ?',
                    'L\'acquisition de nouvelles solutions IA suit-elle un processus de validation formalisé ?'
                ]
            },
            {
                id: 'potentiel',
                name: 'Potentiel & Ambition',
                icon: '🚀',
                color: '#e03d3d',
                desc: 'Évaluation de votre capacité à accélérer',
                questions: [
                    'Vos priorités IA pour les 12 prochains mois sont-elles clairement définies et partagées ?',
                    'Collaborez-vous avec des partenaires ou experts spécialisés en intelligence artificielle ?',
                    'Votre organisation est-elle structurellement prête à se transformer autour de l\'IA ?',
                    'Votre direction est-elle disposée à investir de façon significative dans l\'IA cette année ?'
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

        // Recommendations par score : low < 40 / mid 40-69 / high ≥ 70
        // Distribution cible : JB ×4 · Timothée ×3 · Stéphanie ×3 · Cécile ×3 · Cédric ×5
        const RECOMMENDATIONS = {
            strategie: [
                {
                    maxScore: 39, tag: 'Fondation stratégique',
                    text: 'Votre direction n\'a pas encore formalisé de feuille de route IA. Avant de construire une vision, commencez par des victoires rapides et concrètes : la productivité IA au quotidien — réunions, rédaction, organisation — est souvent le déclic qui convainc la direction d\'investir et d\'inscrire l\'IA dans ses objectifs officiels.',
                    trainer: 'timothee'
                },
                {
                    maxScore: 69, tag: 'Structuration de la vision',
                    text: 'Des initiatives IA existent mais manquent de coordination et de cap commun. Pour structurer la démarche, il faut d\'abord maîtriser les fondamentaux : comprendre les différents types d\'IA, distinguer ce qui est réaliste de ce qui ne l\'est pas, et identifier les cas d\'usage à fort ROI pour votre secteur spécifique.',
                    trainer: 'jb'
                },
                {
                    maxScore: 100, tag: 'Pilotage par la donnée',
                    text: 'Votre posture stratégique est solide. Pour l\'exécuter avec précision, automatisez vos tableaux de bord IA : KPIs d\'adoption, ROI par cas d\'usage, gains de productivité. Avec Make, connectez vos outils de pilotage pour rendre votre feuille de route opérationnelle en temps réel.',
                    trainer: 'cedric'
                }
            ],
            donnees: [
                {
                    maxScore: 39, tag: 'Fondation data',
                    text: 'Vos données sont cloisonnées dans des silos non connectés. Avant tout projet IA, il faut comprendre pourquoi les données sont le carburant indispensable de l\'IA et quelles actions simples permettent de commencer à les valoriser. Identifier les bons cas d\'usage data est la première étape avant toute décision technique.',
                    trainer: 'jb'
                },
                {
                    maxScore: 69, tag: 'Connexion des flux',
                    text: 'Vos données existent mais restent partiellement fragmentées. L\'enjeu est de créer des pipelines automatisés entre vos outils (CRM, Drive, Notion, Airtable…) pour alimenter vos projets IA en temps réel. Des solutions no-code comme Make permettent de connecter ces flux sans développement et en quelques jours.',
                    trainer: 'cedric'
                },
                {
                    maxScore: 100, tag: 'Valorisation avancée',
                    text: 'Vos fondations data sont solides. Exploitez-les pleinement en construisant des workflows d\'enrichissement automatique, des tableaux de bord temps réel et en activant des cas d\'usage IA avancés (RAG sur vos données internes, scoring, prédiction) directement sur votre patrimoine data propriétaire.',
                    trainer: 'cedric'
                }
            ],
            usages: [
                {
                    maxScore: 39, tag: 'Découverte des outils IA',
                    text: 'L\'IA est quasi absente de vos opérations quotidiennes. Des gains immédiats sont pourtant accessibles sans compétences techniques : rédaction, synthèse de réunions, création de contenus, réponses aux emails. Une formation pratique permet de comprendre les outils réellement utiles et d\'identifier vos premiers cas d\'usage à fort impact.',
                    trainer: 'jb'
                },
                {
                    maxScore: 69, tag: 'Diversification des usages',
                    text: 'Des outils IA sont utilisés mais les usages restent souvent cantonnés au texte. Élargissez le champ en intégrant la création visuelle IA dans vos processus : vos équipes peuvent produire des visuels professionnels pour leurs présentations, réseaux sociaux et supports commerciaux — sans graphiste ni compétence technique préalable.',
                    trainer: 'stephanie'
                },
                {
                    maxScore: 100, tag: 'Communication augmentée',
                    text: 'Vos usages IA sont opérationnels. Pour créer un avantage compétitif durable, développez une stratégie de communication augmentée : construisez une voix de marque cohérente et authentique, produisez des contenus à haute valeur ajoutée à grande échelle et positionnez l\'IA comme levier éditorial stratégique pour votre organisation.',
                    trainer: 'cecile'
                }
            ],
            competences: [
                {
                    maxScore: 39, tag: 'Sensibilisation collective',
                    text: 'La quasi-totalité de vos collaborateurs n\'a reçu aucune formation IA. Ce déficit crée un écart croissant avec vos concurrents et freine l\'adoption de tout outil. Démarrez par une session d\'initiation pour démystifier l\'IA générative, comprendre ses possibilités réelles et enclencher la dynamique collective de montée en compétences.',
                    trainer: 'jb'
                },
                {
                    maxScore: 69, tag: 'Productivité opérationnelle',
                    text: 'Quelques collaborateurs utilisent l\'IA mais sans méthode ni cadre partagé. Pour généraliser les bonnes pratiques, formez vos équipes à l\'IA appliquée à leurs tâches quotidiennes : gestion de réunions, rédaction, reporting, communication interne. Des résultats mesurables et visibles dès la première semaine.',
                    trainer: 'timothee'
                },
                {
                    maxScore: 100, tag: 'Excellence éditoriale',
                    text: 'Vos équipes maîtrisent les bases. Pour creuser l\'avantage, développez la capacité à communiquer avec l\'IA de façon authentique et stratégique : construire une voix de marque unique, produire des contenus qui convertissent et utiliser l\'IA comme amplificateur de talent plutôt que simple outil de gain de temps.',
                    trainer: 'cecile'
                }
            ],
            gouvernance: [
                {
                    maxScore: 39, tag: 'Cadre d\'usage urgent',
                    text: 'Vos collaborateurs utilisent probablement des outils IA sans règles ni garde-fous. Ce flou expose votre organisation à des fuites de données et violations RGPD. La formation à l\'usage éthique et responsable de l\'IA est le premier rempart : comprendre les risques réels, adopter les bons réflexes et établir une charte d\'usage simple et applicable.',
                    trainer: 'timothee'
                },
                {
                    maxScore: 69, tag: 'Propriété intellectuelle IA',
                    text: 'Des règles existent mais elles ne couvrent pas tous les usages, notamment les visuels générés par IA. Les droits d\'auteur, la propriété intellectuelle et les conditions d\'usage des images IA sont des angles morts fréquents de la gouvernance. Former vos équipes à ces enjeux est indispensable pour éviter toute exposition légale.',
                    trainer: 'stephanie'
                },
                {
                    maxScore: 100, tag: 'Gouvernance automatisée',
                    text: 'Votre gouvernance IA est robuste. Pour l\'industrialiser, automatisez vos processus de conformité : journaux d\'audit des usages, alertes sur les comportements à risque, tableaux de bord de suivi des incidents. Avec Make, la gouvernance devient elle-même un workflow automatisé à fort impact.',
                    trainer: 'cedric'
                }
            ],
            potentiel: [
                {
                    maxScore: 39, tag: 'Déclic IA',
                    text: 'Votre organisation n\'a pas encore activé son potentiel IA. Souvent, le déclic vient de la communication : comprendre comment l\'IA peut amplifier votre voix, valoriser votre expertise et vous différencier dans votre secteur. Une vision claire de la communication IA suffit à déclencher toute la dynamique d\'innovation.',
                    trainer: 'cecile'
                },
                {
                    maxScore: 69, tag: 'Accélération visuelle',
                    text: 'L\'ambition IA est présente mais les leviers d\'accélération restent à activer. La création de contenu visuel augmenté par l\'IA est l\'un des plus rapides à déployer : en quelques jours, vos équipes produisent des visuels professionnels pour vos supports commerciaux, réseaux sociaux et formations — un accélérateur immédiat et visible.',
                    trainer: 'stephanie'
                },
                {
                    maxScore: 100, tag: 'Leadership sectoriel',
                    text: 'Votre organisation est prête à prendre une position de leader IA dans votre secteur. Structurez un programme d\'innovation continue : agents IA sur mesure, workflows Make entièrement automatisés et architecture d\'outils interconnectés. Objectif : des processus différenciants qui tournent de façon semi-autonome.',
                    trainer: 'cedric'
                }
            ]
        };

        function buildPersonalAnalysis(dimensionScores, finalScore, leadData) {
            const catInsights = {
                strategie: {
                    low: 'la vision stratégique IA reste à formaliser',
                    mid: 'la stratégie IA est en cours de structuration',
                    high: 'la direction est alignée sur les enjeux IA'
                },
                donnees: {
                    low: 'les données sont insuffisamment structurées pour l\'IA',
                    mid: 'l\'infrastructure data est en développement',
                    high: 'les fondations data sont solides et exploitables'
                },
                usages: {
                    low: 'les usages IA concrets sont encore très limités',
                    mid: 'les usages IA émergent mais restent épars',
                    high: 'l\'IA est déjà opérationnelle dans vos processus'
                },
                competences: {
                    low: 'la culture IA n\'est pas encore ancrée dans les équipes',
                    mid: 'les compétences IA se développent progressivement',
                    high: 'les équipes sont compétentes et engagées sur l\'IA'
                },
                gouvernance: {
                    low: 'la gouvernance IA est absente ou informelle',
                    mid: 'le cadre de gouvernance est en cours de formalisation',
                    high: 'le dispositif de gouvernance IA est maîtrisé'
                },
                potentiel: {
                    low: 'le potentiel d\'accélération n\'est pas encore activé',
                    mid: 'l\'ambition IA est présente mais reste à mobiliser',
                    high: 'l\'organisation est prête à accélérer fortement'
                }
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

            // Intro personnalisée selon score global
            if (finalScore < 30) {
                analysis += `<strong>${leadData.prenom}</strong>, votre organisation en est aux prémices de sa transformation IA. Les bases sont encore à poser sur l'ensemble des dimensions — c'est précisément le bon moment pour structurer une démarche cohérente et éviter les erreurs coûteuses.`;
            } else if (finalScore < 55) {
                analysis += `<strong>${leadData.prenom}</strong>, votre organisation a initié sa transition IA mais la démarche reste fragmentée. Des avancées réelles existent sur certains axes, mais des lacunes structurelles freinent encore le passage à l'échelle.`;
            } else if (finalScore < 75) {
                analysis += `<strong>${leadData.prenom}</strong>, votre maturité IA est en bonne progression. Des usages sont en production et la dynamique est engagée — l'enjeu est désormais de structurer pour industrialiser et maximiser l'impact.`;
            } else {
                analysis += `<strong>${leadData.prenom}</strong>, votre organisation affiche une maturité IA avancée, avec une démarche structurée, des équipes compétentes et des usages à impact réel.`;
            }

            // Points forts
            if (strengths.length > 0) {
                analysis += ` Vos points forts se situent en ${strengthNames} — ${strengthInsights}.`;
            }

            // Axes à améliorer avec CTA formation
            if (gaps.length > 0) {
                analysis += ` En revanche, ${gapNames} ${gaps.length > 1 ? 'constituent vos axes' : 'constitue votre axe'} prioritaire${gaps.length > 1 ? 's' : ''} : ${gapInsights}. Les formations ID Labs ci-dessous sont sélectionnées pour répondre précisément à ces besoins.`;
            } else {
                analysis += ` Les formations ID Labs ci-dessous vous permettront d'aller encore plus loin sur vos axes d'excellence.`;
            }

            return analysis;
        }

        // ===== STATE MANAGEMENT =====
        let adminMode = false;
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
            const isFull = count >= 10;
            const remaining = 10 - count;
            const few = remaining <= 3 && remaining > 0;

            let dotsHtml = '';
            for (let i = 0; i < 10; i++) {
                const taken = i < count;
                const warnClass = (isFull || few) && taken ? ' warn' : '';
                dotsHtml += `<span class="dot${taken ? ' taken' + warnClass : ''}"></span>`;
            }

            let statusText = '';
            let statusClass = '';
            const waitlist = count - 10;
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
            const isFull = count >= 10;

            // Info chips
            const remaining = 10 - count;
            let priceChip = '';
            if (formation.tarifSalon && formation.tarifNormal) {
                priceChip = `<div class="modal-info-chip"><strong style="color:var(--primary)">${formation.tarifSalon}</strong>&nbsp;<span style="color:#bbb;text-decoration:line-through">${formation.tarifNormal}</span></div>`;
            } else if (formation.tarif) {
                priceChip = `<div class="modal-info-chip">${formation.tarif}</div>`;
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
                        ${(session.lieu || session.salle) ? `<div class="modal-info-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${[session.lieu, session.salle].filter(Boolean).join(' — ')}</div>` : ''}
                        ${priceChip}
                        ${statusChip}
                    </div>

                    ${formation.objectifs.length > 0 ? `
                        <div class="modal-objectives">
                            ${formation.objectifs.map(obj => `<span class="modal-objective-tag">${obj}</span>`).join('')}
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

            const newQuizBtn = document.getElementById('newQuizBtn');
            const downloadBtn = document.getElementById('downloadDiplomaBtn');

            if (newQuizBtn) newQuizBtn.addEventListener('click', resetQuiz);
            if (downloadBtn) downloadBtn.addEventListener('click', downloadDiploma);

            // Auto-resize inline inputs as user types
            document.querySelectorAll('.cia-inline-input').forEach(input => {
                const resize = () => {
                    const len = Math.max(input.placeholder.length, input.value.length);
                    input.style.width = (len + 1) + 'ch';
                };
                input.addEventListener('input', resize);
                resize();
            });

            // Enter key advances CIA onboarding steps
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

        // ===== CIA ONBOARDING (step-by-step lead form) =====
        const CIA_STEPS = [
            null, // step 0 = accueil (no validation)
            () => {
                const prenom = document.getElementById('leadPrenom').value.trim();
                const nom = document.getElementById('leadNom').value.trim();
                if (!prenom || !nom) { showToast('Indiquez votre prénom et votre nom.'); return false; }
                // Personnalise la question suivante
                const fullName = (prenom.charAt(0).toUpperCase() + prenom.slice(1)) + ' ' + (nom.charAt(0).toUpperCase() + nom.slice(1));
                const agentSpan = document.getElementById('ciaAgentName');
                if (agentSpan) agentSpan.textContent = fullName;
                return true;
            },
            () => {
                const entreprise = document.getElementById('leadEntreprise').value.trim();
                const fonction = document.getElementById('leadFonction').value.trim();
                if (!entreprise) { showToast('Indiquez le nom de votre organisation.'); return false; }
                if (!fonction) { showToast('Indiquez votre fonction.'); return false; }
                const orgName = entreprise.charAt(0).toUpperCase() + entreprise.slice(1);
                const orgSpan = document.getElementById('ciaOrgName');
                if (orgSpan) orgSpan.textContent = orgName;
                return true;
            },
            () => {
                const secteur = document.getElementById('leadSecteur').value;
                const taille = document.getElementById('leadTaille').value;
                if (!secteur) { showToast('Sélectionnez votre secteur d\'activité.'); return false; }
                if (!taille) { showToast('Sélectionnez la taille de votre équipe.'); return false; }
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

            if (currentStep === 4) {
                // Last step → launch quiz
                startQuiz();
                return;
            }

            const current = document.getElementById('ciaStep' + currentStep);
            const next = document.getElementById('ciaStep' + (currentStep + 1));
            if (current) current.classList.remove('active');
            if (next) next.classList.add('active');
        }

        function startQuiz() {
            const nom = document.getElementById('leadNom').value.trim();
            const prenom = document.getElementById('leadPrenom').value.trim();
            const email = document.getElementById('leadEmail').value.trim();
            const entreprise = document.getElementById('leadEntreprise').value.trim();

            if (!nom || !prenom || !email || !entreprise) {
                showToast('Veuillez remplir tous les champs obligatoires');
                return;
            }

            quizState.leadData = {
                nom, prenom, email, entreprise,
                secteur: document.getElementById('leadSecteur').value || 'N/A',
                taille: document.getElementById('leadTaille').value || 'N/A',
                fonction: document.getElementById('leadFonction').value || 'N/A'
            };

            quizState.allQuestions = [];
            QUIZ_CATEGORIES.forEach((cat, catIdx) => {
                cat.questions.forEach((q, qIdx) => {
                    quizState.allQuestions.push({ cat, catIdx, q, qIdx });
                });
            });
            quizState.totalQuestions = quizState.allQuestions.length;
            quizState.currentQuestion = 0;
            quizState.answers = {};
            quizState.xp = 0;

            document.getElementById('quizLeadForm').style.display = 'none';
            document.getElementById('quizArena').style.display = 'flex';
            document.getElementById('resultsPage').style.display = 'none';
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

                // Progress bar
                const pct = (idx / quizState.allQuestions.length) * 100;
                const fill = document.getElementById('progressFill');
                if (fill) fill.style.width = pct + '%';

                // Counter
                const counter = document.getElementById('questionCounter');
                if (counter) counter.textContent = 'Q-' + String(idx + 1).padStart(2, '0') + ' / ' + quizState.allQuestions.length;

                // Category chip
                const icon = document.getElementById('qaCategoryIcon');
                const name = document.getElementById('qaCategoryName');
                if (icon) icon.textContent = cat.icon;
                if (name) name.textContent = cat.name;

                // Category stepper
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

                // Card accent color
                if (card) card.style.setProperty('--cat-color', cat.color);

                // Mission label + question
                const missionLabel = document.getElementById('qaMissionLabel');
                if (missionLabel) missionLabel.textContent = cat.desc;
                const qText = document.getElementById('questionText');
                if (qText) qText.textContent = q;

                // Answer buttons
                const key = catIdx + '-' + qIdx;
                const current = quizState.answers[key];
                const container = document.getElementById('answerButtons');

                if (container) {
                    container.innerHTML = `
                        <div class="answer-scale-hint">
                            <span>1 · le moins bon</span>
                            <span>6 · le mieux</span>
                        </div>
                        <div class="answer-btns-row">
                            ${[1,2,3,4,5,6].map(v => `
                                <button class="answer-btn${current === v ? ' selected' : ''}"
                                    data-value="${v}" data-cat="${catIdx}" data-q="${qIdx}"
                                    style="--cat-color: ${cat.color}">
                                    ${v}
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

                // Enter animation
                if (card) {
                    void card.offsetWidth;
                    card.classList.add('qa-enter');
                    setTimeout(() => card.classList.remove('qa-enter'), 350);
                }
            };

            // Exit then render
            if (card && idx > 0) {
                card.classList.add('qa-exit');
                setTimeout(() => {
                    card.classList.remove('qa-exit');
                    _doRender();
                }, 200);
            } else {
                _doRender();
            }
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

                const avgScore = catCount > 0 ? (catScore / (catCount * 6)) * 100 : 0;
                dimensionScores[cat.id] = Math.round(avgScore);
                totalScore += avgScore;
            });

            const finalScore = Math.round(totalScore / QUIZ_CATEGORIES.length);

            // Build detailed answer log
            const detailedAnswers = quizState.allQuestions.map(({ cat, catIdx, q, qIdx }) => ({
                categorie: cat.name,
                question: q,
                reponse: quizState.answers[catIdx + '-' + qIdx] || null
            }));

            // Save result
            const results = loadData('quiz_results', []);
            results.push({
                leadData: quizState.leadData,
                answers: detailedAnswers,
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
            const quizProgress = document.getElementById('quizArena');
            if (quizProgress) quizProgress.style.display = 'none';
            const resultsPage = document.getElementById('resultsPage');
            if (resultsPage) resultsPage.style.display = 'block';
            // Full-width layout for results dashboard
            const quizPageEl = document.querySelector('.quiz-page');
            if (quizPageEl) quizPageEl.style.maxWidth = '100%';
            const containerPageEl = document.querySelector('.container-page');
            if (containerPageEl) { containerPageEl.style.maxWidth = '100%'; containerPageEl.style.padding = '0'; }
            const quitBtn = document.getElementById('qaQuitBtn');
            if (quitBtn) quitBtn.style.display = 'none';

            // Date
            const rpDate = document.getElementById('rpDate');
            if (rpDate) rpDate.textContent = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

            // Hero — name / company
            const resultName = document.getElementById('resultName');
            if (resultName) resultName.textContent = `${quizState.leadData.prenom} ${quizState.leadData.nom}`;
            const rpCompany = document.getElementById('rpCompany');
            if (rpCompany) rpCompany.textContent = quizState.leadData.entreprise || '';

            // Score arc SVG
            const scoreRing = document.getElementById('scoreRing');
            if (scoreRing) {
                const r = 88, cx = 100, cy = 100;
                const circ = 2 * Math.PI * r;
                const bg = circ * 0.75; // 270° arc
                const offset = bg * (1 - score / 100);
                const rot = 135; // start from bottom-left
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
                // Animate counter
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

            // KPI cards (with recommendation inline)
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
                                        style="transition: stroke-dashoffset 1s ${0.1}s cubic-bezier(0.4,0,0.2,1);"/>
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
                                    <a href="formations.html" class="kpi-formation-cta" style="background:${cat.color};">Voir →</a>
                                </div>
                            </div>` : ''}
                        </div>`;
                }).join('');

                setTimeout(() => {
                    document.querySelectorAll('.kpi-card-bar-fill').forEach(el => {
                        el.style.width = el.dataset.target + '%';
                    });
                    document.querySelectorAll('.kpi-arc').forEach(el => {
                        el.style.strokeDashoffset = el.dataset.target;
                    });
                }, 150);
            }

            // Draw radar chart
            drawRadarChart(dimensionScores);

            // Personal analysis already in hero (levelDesc)
            const analysisEl = document.getElementById('personalAnalysis');
            if (analysisEl) analysisEl.style.display = 'none';

            // Recos now embedded in KPI cards — hide separate section
            const recosSect = document.querySelector('.recos-section');
            if (recosSect) recosSect.style.display = 'none';

            // Draw diploma
            drawDiploma(score, level);
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

            const angles = Array.from({ length: n }, (_, i) =>
                (i / n) * Math.PI * 2 - Math.PI / 2
            );

            const px = (r, i) => cx + r * Math.cos(angles[i]);
            const py = (r, i) => cy + r * Math.sin(angles[i]);

            // Concentric grid polygons
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
                // pct label on right axis
                if (pct < 100) {
                    ctx.fillStyle = '#b0bec5';
                    ctx.font = '9px sans-serif';
                    ctx.textAlign = 'left';
                    ctx.fillText(pct, cx + r + 3, cy + 3);
                }
            });

            // Axes
            for (let i = 0; i < n; i++) {
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(px(maxR, i), py(maxR, i));
                ctx.strokeStyle = '#dde5f0';
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            // Data polygon fill (gradient-like multi-color)
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

            // Colored dots per dimension
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

            // Icon + score labels
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
            const quizProgress = document.getElementById('quizArena');
            const resultsPage = document.getElementById('resultsPage');

            if (leadForm) leadForm.style.display = 'block';
            if (quizProgress) quizProgress.style.display = 'none';
            if (resultsPage) resultsPage.style.display = 'none';
            const quitBtn = document.getElementById('qaQuitBtn');
            if (quitBtn) quitBtn.style.display = 'none';
            const qpEl = document.querySelector('.quiz-page');
            if (qpEl) qpEl.style.maxWidth = '';
            const cpEl = document.querySelector('.container-page');
            if (cpEl) { cpEl.style.maxWidth = ''; cpEl.style.padding = ''; }

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

            // Reset CIA steps to step 0
            document.querySelectorAll('.cia-step').forEach(s => s.classList.remove('active'));
            const step0 = document.getElementById('ciaStep0');
            if (step0) step0.classList.add('active');
            document.getElementById('leadSecteur').value = '';
            document.getElementById('leadTaille').value = '';

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
                                <div class="formation-stat-count">${count} / 10</div>
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
                // DEV SHORTCUT: quiz.html?test — skip directly to results
                if (new URLSearchParams(location.search).has('test')) {
                    quizState.leadData = { prenom: 'Test', nom: 'Dev', email: 'test@dev.fr', entreprise: 'ID Labs' };
                    quizState.allQuestions = [];
                    QUIZ_CATEGORIES.forEach((cat, catIdx) => {
                        cat.questions.forEach((q, qIdx) => {
                            quizState.allQuestions.push({ cat, catIdx, q, qIdx });
                            quizState.answers[`${catIdx}-${qIdx}`] = 3;
                        });
                    });
                    document.getElementById('quizLeadForm').style.display = 'none';
                    calculateResults();
                    return;
                }
                initQuiz();
            } else if (currentPage === 'admin') {
                updateAdminPanel();
                setupAdminPage();
                // Make admin button visible on admin page
                const adminBtn = document.getElementById('adminBtn');
                if (adminBtn) adminBtn.classList.add('visible');
            }
        });
