-- =============================================================
-- ID Labs — Schéma MySQL initial (Caen Business Expo 2026)
-- Chargé automatiquement au premier démarrage du conteneur db.
-- =============================================================

SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- -------------------------------------------------------------
-- TABLE : formations
-- -------------------------------------------------------------
DROP TABLE IF EXISTS formation_registrations;
DROP TABLE IF EXISTS formation_sessions;
DROP TABLE IF EXISTS formations;

CREATE TABLE formations (
    id              VARCHAR(50)  NOT NULL,
    trainer         VARCHAR(120) NOT NULL,
    initials        VARCHAR(10)  DEFAULT NULL,
    avatar_color    VARCHAR(20)  DEFAULT NULL,
    photo           VARCHAR(255) DEFAULT NULL,
    tag             VARCHAR(80)  DEFAULT NULL,
    title           TEXT         NOT NULL,
    resume          TEXT         DEFAULT NULL,
    objectifs       JSON         DEFAULT NULL,
    bio             TEXT         DEFAULT NULL,
    tarif_salon     VARCHAR(20)  DEFAULT NULL,
    tarif_normal    VARCHAR(20)  DEFAULT NULL,
    tarif           VARCHAR(20)  DEFAULT NULL,
    lien            VARCHAR(500) DEFAULT NULL,
    display_order   INT          DEFAULT 0,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- TABLE : formation_sessions
-- -------------------------------------------------------------
CREATE TABLE formation_sessions (
    id              VARCHAR(60)  NOT NULL,
    formation_id    VARCHAR(50)  NOT NULL,
    label           VARCHAR(120) NOT NULL,
    session_date    DATE         DEFAULT NULL,
    lieu            VARCHAR(120) DEFAULT NULL,
    salle           VARCHAR(120) DEFAULT NULL,
    capacity        INT          DEFAULT 10,
    display_order   INT          DEFAULT 0,
    PRIMARY KEY (id),
    KEY idx_formation (formation_id),
    CONSTRAINT fk_session_formation FOREIGN KEY (formation_id)
        REFERENCES formations(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- TABLE : formation_registrations
-- -------------------------------------------------------------
CREATE TABLE formation_registrations (
    id              INT AUTO_INCREMENT,
    session_id      VARCHAR(60)  NOT NULL,
    formation_id    VARCHAR(50)  NOT NULL,
    nom             VARCHAR(120) NOT NULL,
    prenom          VARCHAR(120) NOT NULL,
    email           VARCHAR(255) NOT NULL,
    telephone       VARCHAR(50)  DEFAULT NULL,
    entreprise      VARCHAR(255) NOT NULL,
    created_at      TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    KEY idx_session (session_id),
    KEY idx_formation (formation_id),
    KEY idx_email (email),
    CONSTRAINT fk_reg_session FOREIGN KEY (session_id)
        REFERENCES formation_sessions(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- TABLE : quiz_results (avec détail des réponses)
-- -------------------------------------------------------------
DROP TABLE IF EXISTS quiz_answers;
DROP TABLE IF EXISTS quiz_results;

CREATE TABLE quiz_results (
    id                  INT AUTO_INCREMENT,
    prenom              VARCHAR(120) NOT NULL,
    nom                 VARCHAR(120) NOT NULL,
    email               VARCHAR(255) NOT NULL,
    entreprise          VARCHAR(255) DEFAULT NULL,
    secteur             VARCHAR(80)  DEFAULT NULL,
    taille              VARCHAR(40)  DEFAULT NULL,
    fonction            VARCHAR(255) DEFAULT NULL,
    final_score         INT          NOT NULL,
    dimension_scores    JSON         DEFAULT NULL,
    created_at          TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    KEY idx_email (email),
    KEY idx_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- TABLE : quiz_answers (1 ligne par question répondue)
-- -------------------------------------------------------------
CREATE TABLE quiz_answers (
    id              INT AUTO_INCREMENT,
    quiz_result_id  INT          NOT NULL,
    categorie       VARCHAR(120) NOT NULL,
    question        TEXT         NOT NULL,
    reponse         TINYINT      DEFAULT NULL,
    PRIMARY KEY (id),
    KEY idx_result (quiz_result_id),
    CONSTRAINT fk_answer_result FOREIGN KEY (quiz_result_id)
        REFERENCES quiz_results(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- TABLE : admin_credentials
-- Stocke le hash bcrypt du code admin (1 seule ligne, id=1).
-- Le hash est créé à la volée au premier login réussi à partir
-- de la variable ADMIN_PASSWORD du .env (bootstrap).
-- -------------------------------------------------------------
DROP TABLE IF EXISTS admin_credentials;

CREATE TABLE admin_credentials (
    id              INT          NOT NULL,
    password_hash   VARCHAR(255) NOT NULL,
    created_at      TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- TABLE : sessions
-- Sessions PHP stockées en BDD (custom session handler).
-- Le payload est chiffré côté PHP avec AES-256-CBC + HMAC-SHA256
-- avant insertion (clé : SESSION_SECRET du .env).
-- -------------------------------------------------------------
DROP TABLE IF EXISTS sessions;

CREATE TABLE sessions (
    id          VARCHAR(128) NOT NULL,
    payload     LONGBLOB     NOT NULL,
    expires_at  DATETIME     NOT NULL,
    created_at  TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    KEY idx_expires (expires_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -------------------------------------------------------------
-- TABLES QUIZ : configuration (catégories / questions / niveaux / recos)
-- Stockées en BDD pour permettre l'édition sans toucher au code
-- et alléger le bundle JS côté client.
-- -------------------------------------------------------------
DROP TABLE IF EXISTS quiz_recommendations;
DROP TABLE IF EXISTS quiz_questions;
DROP TABLE IF EXISTS quiz_levels;
DROP TABLE IF EXISTS quiz_categories;

CREATE TABLE quiz_categories (
    id              VARCHAR(40)  NOT NULL,
    name            VARCHAR(120) NOT NULL,
    icon            VARCHAR(10)  DEFAULT NULL,
    color           VARCHAR(20)  DEFAULT NULL,
    description     VARCHAR(255) DEFAULT NULL,
    display_order   INT          DEFAULT 0,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE quiz_questions (
    id              INT AUTO_INCREMENT,
    category_id     VARCHAR(40)  NOT NULL,
    question_text   TEXT         NOT NULL,
    display_order   INT          DEFAULT 0,
    PRIMARY KEY (id),
    KEY idx_category (category_id),
    CONSTRAINT fk_question_category FOREIGN KEY (category_id)
        REFERENCES quiz_categories(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE quiz_levels (
    id              INT AUTO_INCREMENT,
    score_min       INT          NOT NULL,
    score_max       INT          NOT NULL,
    name            VARCHAR(40)  NOT NULL,
    emoji           VARCHAR(10)  DEFAULT NULL,
    color           VARCHAR(20)  DEFAULT NULL,
    title           VARCHAR(255) DEFAULT NULL,
    description     TEXT         DEFAULT NULL,
    display_order   INT          DEFAULT 0,
    PRIMARY KEY (id),
    KEY idx_score (score_min, score_max)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE quiz_recommendations (
    id              INT AUTO_INCREMENT,
    category_id     VARCHAR(40)  NOT NULL,
    max_score       INT          NOT NULL,
    tag             VARCHAR(120) NOT NULL,
    reco_text       TEXT         NOT NULL,
    trainer_id      VARCHAR(50)  DEFAULT NULL,
    display_order   INT          DEFAULT 0,
    PRIMARY KEY (id),
    KEY idx_category (category_id),
    KEY idx_trainer (trainer_id),
    CONSTRAINT fk_reco_category FOREIGN KEY (category_id)
        REFERENCES quiz_categories(id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_reco_trainer FOREIGN KEY (trainer_id)
        REFERENCES formations(id) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;

-- =============================================================
-- SEED : 6 formateurs (Andrew MAHE inclus, dates aléatoires)
-- =============================================================

INSERT INTO formations
    (id, trainer, initials, avatar_color, photo, tag, title, resume, objectifs, bio, tarif_salon, tarif_normal, lien, display_order)
VALUES
    ('jb', 'Jean Baptiste BODARD', 'JB', '#152f7b', 'photos/jb.png', 'Initiation',
     'Découvrir l''Intelligence artificielle et s''initier à l''IA Générative',
     'Découvrez une formation pratique pour maîtriser l''IA générative, ses usages professionnels et booster performance, innovation et compétitivité',
     JSON_ARRAY(
        'Définir les principes de base de l''Intelligence artificielle',
        'Maîtriser les fondamentaux du prompt engineering',
        'Appréhender et tester les applications et outils d''IA Générative'
     ),
     '', '350 €', '400 €',
     'https://www.idlabs.fr/fr/formations/ia-generative/decouvrir-l-intelligence-artificielle-et-s-initier-a-l-ia-generative',
     1),

    ('timothee', 'Timothée LAISNE', 'TL', '#2292cb', 'photos/timothee.jpg', 'Productivité',
     'Fluidifier ses tâches professionnelles quotidiennes grâce à l''IA',
     'Cette formation de 7h vous prépare à utiliser l''IA au travail pour gagner en productivité tout en respectant le cadre éthique.',
     JSON_ARRAY(
        'Piloter ses réunions grâce à l''IA',
        'Améliorer ses usages bureautiques grâce à l''IA',
        'Utiliser les IA d''assistance à la production',
        'Utiliser l''IA dans un cadre éthique défini'
     ),
     '', '350 €', '400 €',
     'https://www.idlabs.fr/fr/experts/timothee-laisne',
     2),

    ('stephanie', 'Stéphanie Mahelin', 'SM', '#8b5cf6', 'photos/stephanie.jpg', 'Création visuelle',
     'Maîtrisez la création d''images au moyen de l''IA',
     'Créez, retouchez et déclinez vos visuels professionnels grâce à l''IA — sans compétences techniques préalables.',
     JSON_ARRAY(
        'Comprendre et choisir les bons outils IA selon son besoin',
        'Générer des visuels professionnels à partir d''un brief',
        'Retoucher et enrichir des images existantes avec l''IA',
        'Livrer un projet complet avec ses déclinaisons multi-formats'
     ),
     '', '375 €', '455 €',
     'https://www.idlabs.fr/fr/formations/ia-generative/ia-generative-d-images-creer-retoucher-et-decliner-vos-visuels-professionnels',
     3),

    ('cecile', 'Cécile Adeline', 'CA', '#2eb87a', 'photos/cecile_adeline.jpg', 'Communication',
     'Communiquer de manière authentique et immersive en 2026 grâce à l''IA générative',
     'Utiliser l''IA générative pour amplifier son message, produire des contenus authentiques et créer des expériences de communication immersives.',
     JSON_ARRAY(
        'Maîtriser l''art du prompt engineering pour une communication authentique',
        'Créer un éco-système de communication {Vous + IA} personnalisé à votre marque',
        'Décupler votre force de frappe éditoriale tout en conservant votre voix unique'
     ),
     'Je suis Cécile, copywriter. Ce que je débloque chez un dirigeant, c''est la capacité à rendre son savoir-faire désirable et évident : son message cesse d''être purement informatif pour devenir magnétique.',
     '350 €', '400 €',
     'https://www.idlabs.fr/fr/formations/ia-generative/communiquer-de-maniere-authentique-et-immersive-en-2025-grace-a-l-ia-generative',
     4),

    ('cedric', 'Cédric Lang-Roth', 'CL', '#e8922a', 'photos/cedric.jpg', 'Agents IA',
     'Automatisez vos tâches avec Make et l''IA',
     'Apprenez à créer des automatisations visuelles avec Make et à intégrer l''IA dans vos workflows, sans coder.',
     JSON_ARRAY(
        'Maîtriser l''interface et les concepts fondamentaux de Make',
        'Exploiter les structures de données, la logique conditionnelle et les fonctions de transformation',
        'Intégrer l''intelligence artificielle et adopter les bonnes pratiques de production'
     ),
     'Je suis Cédric, développeur et formateur. Ce que je débloque chez un dirigeant, c''est la maîtrise de ses outils numériques : je construis des solutions solides, intégrant développement, automatisation, IA et No-Code.',
     '380 €', '450 €',
     'https://www.idlabs.fr/fr/formations/digital-en-entreprise/automatisez-vos-taches-avec-make-et-l-ia',
     5),

    ('andrew', 'Andrew MAHE', 'AM', '#0ea5e9', 'photos/andrew_mahe.jpg', 'Claude & IA Entreprise',
     'Maîtrisez les 3 Claude pour transformer votre entreprise : Chat, Cowork & Code',
     'Découvrez comment les 3 Claude — Chat, Cowork et Code — peuvent transformer le quotidien de votre entreprise.',
     JSON_ARRAY(
        'Claude Chat : le réflexe IA quotidien de toute l''équipe, sans prérequis technique.',
        'Claude Code : accélérer le développement applicatif avec les bons prompts et des agents autonomes.',
        'Claude Cowork : reprendre le contrôle de votre business — fichiers, process, collaboration.'
     ),
     'Andrew MAHÉ, expert du déploiement de Claude en entreprise. J''accompagne dirigeants et équipes techniques pour passer de l''expérimentation isolée à l''usage industriel — avec des gains de productivité visibles dès la première semaine.',
     '350 €', '400 €',
     'https://www.idlabs.fr/',
     6);

-- =============================================================
-- SEED : sessions (Caen — dates 2026, dates random pour Andrew)
-- =============================================================

INSERT INTO formation_sessions
    (id, formation_id, label, session_date, lieu, salle, capacity, display_order)
VALUES
    ('jb_s1',         'jb',        '2 juin 2026',           '2026-06-02', 'Caen', '', 10, 1),
    ('jb_s2',         'jb',        '6 octobre 2026',        '2026-10-06', 'Caen', '', 10, 2),

    ('timothee_s1',   'timothee',  '9 juin 2026',           '2026-06-09', 'Caen', '', 10, 1),
    ('timothee_s2',   'timothee',  '10 septembre 2026',     '2026-09-10', 'Caen', '', 10, 2),

    ('stephanie_s1',  'stephanie', '25-26 juin 2026',       '2026-06-25', 'Caen', '', 10, 1),
    ('stephanie_s2',  'stephanie', '21-22 septembre 2026',  '2026-09-21', 'Caen', '', 10, 2),

    ('cecile_s1',     'cecile',    '11 juin 2026',          '2026-06-11', 'Caen', '', 10, 1),
    ('cecile_s2',     'cecile',    '17 septembre 2026',     '2026-09-17', 'Caen', '', 10, 2),

    ('cedric_s1',     'cedric',    '16 juin 2026',          '2026-06-16', 'Caen', '', 10, 1),
    ('cedric_s2',     'cedric',    '1er octobre 2026',      '2026-10-01', 'Caen', '', 10, 2),

    ('andrew_s1',     'andrew',    '4 juin 2026',           '2026-06-04', 'Caen', '', 10, 1),
    ('andrew_s2',     'andrew',    '24 Juillet 2026',     '2026-09-24', 'Caen', '', 10, 2);

-- =============================================================
-- SEED : configuration du quiz IA
-- =============================================================

INSERT INTO quiz_categories (id, name, icon, color, description, display_order) VALUES
    ('strategie',   'Vision & Stratégie',         '🧭', '#2292cb', 'Évaluation de votre posture stratégique',     1),
    ('donnees',     'Données & Infrastructure',   '🗄️', '#152f7b', 'Audit de vos fondations data',                2),
    ('usages',      'Usages & Outils IA',         '🛠️', '#e8922a', 'Analyse de vos opérations terrain',           3),
    ('competences', 'Compétences & Culture',      '🧠', '#2eb87a', 'Évaluation du capital humain IA',             4),
    ('gouvernance', 'Processus & Gouvernance',    '⚙️', '#8b5cf6', 'Audit des protocoles et conformité',          5),
    ('potentiel',   'Potentiel & Ambition',       '🚀', '#e03d3d', 'Évaluation de votre capacité à accélérer',    6);

INSERT INTO quiz_questions (category_id, question_text, display_order) VALUES
    ('strategie',   'Votre direction a-t-elle formalisé une feuille de route IA avec des jalons clairs ?', 1),
    ('strategie',   'Un budget dédié aux initiatives IA a-t-il été alloué dans votre structure ?', 2),
    ('strategie',   'Un responsable est-il officiellement désigné pour piloter votre transformation IA ?', 3),
    ('strategie',   'L''intelligence artificielle est-elle inscrite dans vos objectifs stratégiques officiels ?', 4),
    ('donnees',     'Vos données métiers sont-elles centralisées et accessibles facilement à vos équipes ?', 1),
    ('donnees',     'Une politique de gouvernance des données est-elle active et respectée dans votre organisation ?', 2),
    ('donnees',     'Les outils numériques en place permettent d''envisager une intégration progressive de solutions IA ?', 3),
    ('donnees',     'L''entreprise dispose d''outils d''analyse, de reporting ou de business intelligence déjà utilisés par les équipes.', 4),
    ('usages',      'Des outils IA sont-ils activement utilisés au quotidien par vos équipes ?', 1),
    ('usages',      'Savez-vous précisément quels outils d''IA générative sont actuellement utilisés par vos collaborateurs ?', 2),
    ('usages',      'Avez-vous identifié plusieurs cas d''usage IA à fort potentiel pour votre activité ?', 3),
    ('usages',      'L''IA automatise-t-elle des processus internes dans votre organisation ?', 4),
    ('usages',      'Mesurez-vous le retour sur investissement de vos projets IA ?', 5),
    ('competences', 'Vos collaborateurs ont-ils bénéficié de formations IA ou de prompt engineering ?', 1),
    ('competences', 'Des profils techniques spécialisés en IA existent-ils au sein de votre structure ?', 2),
    ('competences', 'Des ambassadeurs IA relaient-ils activement les bonnes pratiques dans vos équipes ?', 3),
    ('competences', 'Votre direction encourage-t-elle et finance-t-elle l''expérimentation IA au quotidien ?', 4),
    ('gouvernance', 'Une politique de sécurité encadre-t-elle formellement l''usage de vos outils IA ?', 1),
    ('gouvernance', 'Votre organisation dispose-t-elle d''une charte éthique régissant l''usage de l''IA ?', 2),
    ('gouvernance', 'Les risques IA — biais algorithmiques, hallucinations — sont-ils identifiés et contrôlés ?', 3),
    ('gouvernance', 'L''acquisition de nouvelles solutions IA suit-elle un processus de validation formalisé ?', 4),
    ('potentiel',   'Vos priorités IA pour les 12 prochains mois sont-elles clairement définies et partagées ?', 1),
    ('potentiel',   'Collaborez-vous avec des partenaires ou experts spécialisés en intelligence artificielle ?', 2),
    ('potentiel',   'Votre organisation est-elle structurellement prête à se transformer autour de l''IA ?', 3),
    ('potentiel',   'Votre direction est-elle disposée à investir de façon significative dans l''IA cette année ?', 4);

INSERT INTO quiz_levels (score_min, score_max, name, emoji, color, title, description, display_order) VALUES
    (0,  20, 'Observateur',  '🌱', '#e03d3d', 'Vous débutez votre exploration IA',
     'Votre organisation en est aux prémices de l''IA. C''est le moment idéal pour poser les bases : sensibilisation, identification des cas d''usage et cadrage stratégique.', 1),
    (21, 40, 'Explorateur',  '🔍', '#e8922a', 'Vous expérimentez les premiers cas d''usage',
     'Des initiatives IA émergent, mais restent isolées. Il faut structurer la démarche : gouvernance des données, formation et alignement stratégique.', 2),
    (41, 60, 'Adopteur',     '⚡', '#2292cb', 'L''IA s''intègre dans vos opérations',
     'Vous avez des usages IA en production. L''enjeu est de scaler : industrialiser les cas d''usage, renforcer les compétences et mesurer le ROI.', 3),
    (61, 80, 'Accélérateur', '🏎️', '#152f7b', 'L''IA devient un avantage concurrentiel',
     'Votre maturité IA est avancée. Concentrez-vous sur l''IA générative, l''optimisation continue et l''innovation produit pour creuser l''écart.', 4),
    (81, 100, 'Leader',      '🏆', '#2eb87a', 'Vous êtes à l''avant-garde de l''IA',
     'Félicitations ! Votre organisation est parmi les plus matures. Vision claire, usages à impact, équipes compétentes et gouvernance robuste.', 5);

INSERT INTO quiz_recommendations (category_id, max_score, tag, reco_text, trainer_id, display_order) VALUES
    ('strategie', 39, 'Fondation stratégique',
     'Votre direction n''a pas encore formalisé de feuille de route IA. Avant de construire une vision, commencez par des victoires rapides et concrètes : la productivité IA au quotidien — réunions, rédaction, organisation — est souvent le déclic qui convainc la direction d''investir et d''inscrire l''IA dans ses objectifs officiels.',
     'timothee', 1),
    ('strategie', 69, 'Structuration de la vision',
     'Des initiatives IA existent mais manquent de coordination et de cap commun. Pour structurer la démarche, il faut d''abord maîtriser les fondamentaux : comprendre les différents types d''IA, distinguer ce qui est réaliste de ce qui ne l''est pas, et identifier les cas d''usage à fort ROI pour votre secteur spécifique.',
     'jb', 2),
    ('strategie', 100, 'Pilotage par la donnée',
     'Votre posture stratégique est solide. Pour l''exécuter avec précision, automatisez vos tableaux de bord IA : KPIs d''adoption, ROI par cas d''usage, gains de productivité. Avec Make, connectez vos outils de pilotage pour rendre votre feuille de route opérationnelle en temps réel.',
     'cedric', 3),
    ('donnees', 39, 'Fondation data',
     'Vos données sont cloisonnées dans des silos non connectés. Avant tout projet IA, il faut comprendre pourquoi les données sont le carburant indispensable de l''IA et quelles actions simples permettent de commencer à les valoriser. Identifier les bons cas d''usage data est la première étape avant toute décision technique.',
     'jb', 1),
    ('donnees', 69, 'Connexion des flux',
     'Vos données existent mais restent partiellement fragmentées. L''enjeu est de créer des pipelines automatisés entre vos outils (CRM, Drive, Notion, Airtable…) pour alimenter vos projets IA en temps réel. Des solutions no-code comme Make permettent de connecter ces flux sans développement et en quelques jours.',
     'cedric', 2),
    ('donnees', 100, 'Valorisation avancée',
     'Vos fondations data sont solides. Exploitez-les pleinement en construisant des workflows d''enrichissement automatique, des tableaux de bord temps réel et en activant des cas d''usage IA avancés (RAG sur vos données internes, scoring, prédiction) directement sur votre patrimoine data propriétaire.',
     'cedric', 3),
    ('usages', 39, 'Découverte des outils IA',
     'L''IA est quasi absente de vos opérations quotidiennes. Des gains immédiats sont pourtant accessibles sans compétences techniques : rédaction, synthèse de réunions, création de contenus, réponses aux emails. Une formation pratique permet de comprendre les outils réellement utiles et d''identifier vos premiers cas d''usage à fort impact.',
     'jb', 1),
    ('usages', 69, 'Diversification des usages',
     'Des outils IA sont utilisés mais les usages restent souvent cantonnés au texte. Élargissez le champ en intégrant la création visuelle IA dans vos processus : vos équipes peuvent produire des visuels professionnels pour leurs présentations, réseaux sociaux et supports commerciaux — sans graphiste ni compétence technique préalable.',
     'stephanie', 2),
    ('usages', 100, 'Industrialisation Claude',
     'Vos usages IA sont matures. Pour passer à l''échelle entreprise, déployez l''écosystème Claude (Chat, Cowork, Code) sur vos process internes : Claude Code pour accélérer le développement applicatif, Claude Cowork pour industrialiser les workflows métiers, Claude Chat pour démultiplier la productivité quotidienne.',
     'andrew', 3),
    ('competences', 39, 'Sensibilisation collective',
     'La quasi-totalité de vos collaborateurs n''a reçu aucune formation IA. Ce déficit crée un écart croissant avec vos concurrents et freine l''adoption de tout outil. Démarrez par une session d''initiation pour démystifier l''IA générative, comprendre ses possibilités réelles et enclencher la dynamique collective de montée en compétences.',
     'jb', 1),
    ('competences', 69, 'Productivité opérationnelle',
     'Quelques collaborateurs utilisent l''IA mais sans méthode ni cadre partagé. Pour généraliser les bonnes pratiques, formez vos équipes à l''IA appliquée à leurs tâches quotidiennes : gestion de réunions, rédaction, reporting, communication interne. Des résultats mesurables et visibles dès la première semaine.',
     'timothee', 2),
    ('competences', 100, 'Excellence éditoriale',
     'Vos équipes maîtrisent les bases. Pour creuser l''avantage, développez la capacité à communiquer avec l''IA de façon authentique et stratégique : construire une voix de marque unique, produire des contenus qui convertissent et utiliser l''IA comme amplificateur de talent plutôt que simple outil de gain de temps.',
     'cecile', 3),
    ('gouvernance', 39, 'Cadre d''usage urgent',
     'Vos collaborateurs utilisent probablement des outils IA sans règles ni garde-fous. Ce flou expose votre organisation à des fuites de données et violations RGPD. La formation à l''usage éthique et responsable de l''IA est le premier rempart : comprendre les risques réels, adopter les bons réflexes et établir une charte d''usage simple et applicable.',
     'timothee', 1),
    ('gouvernance', 69, 'Propriété intellectuelle IA',
     'Des règles existent mais elles ne couvrent pas tous les usages, notamment les visuels générés par IA. Les droits d''auteur, la propriété intellectuelle et les conditions d''usage des images IA sont des angles morts fréquents de la gouvernance. Former vos équipes à ces enjeux est indispensable pour éviter toute exposition légale.',
     'stephanie', 2),
    ('gouvernance', 100, 'Déploiement Claude maîtrisé',
     'Votre gouvernance IA est robuste. Pour transformer cette maîtrise en avantage opérationnel, déployez Claude (Chat, Cowork, Code) à l''échelle entreprise avec un cadre clair : politiques d''usage par métier, observabilité des prompts, sécurité des données et industrialisation des workflows.',
     'andrew', 3),
    ('potentiel', 39, 'Déclic IA',
     'Votre organisation n''a pas encore activé son potentiel IA. Souvent, le déclic vient de la communication : comprendre comment l''IA peut amplifier votre voix, valoriser votre expertise et vous différencier dans votre secteur. Une vision claire de la communication IA suffit à déclencher toute la dynamique d''innovation.',
     'cecile', 1),
    ('potentiel', 69, 'Accélération visuelle',
     'L''ambition IA est présente mais les leviers d''accélération restent à activer. La création de contenu visuel augmenté par l''IA est l''un des plus rapides à déployer : en quelques jours, vos équipes produisent des visuels professionnels pour vos supports commerciaux, réseaux sociaux et formations — un accélérateur immédiat et visible.',
     'stephanie', 2),
    ('potentiel', 100, 'Leadership sectoriel',
     'Votre organisation est prête à prendre une position de leader IA dans votre secteur. Structurez un programme d''innovation continue : agents IA sur mesure, workflows Make entièrement automatisés et architecture d''outils interconnectés. Objectif : des processus différenciants qui tournent de façon semi-autonome.',
     'cedric', 3);

-- =============================================================
-- TABLE : videos (vidéos de démonstration des formateurs)
-- =============================================================
DROP TABLE IF EXISTS videos;

CREATE TABLE videos (
    id              INT AUTO_INCREMENT,
    trainer_id      VARCHAR(50)  NOT NULL,
    title           VARCHAR(255) NOT NULL,
    tag             VARCHAR(80)  DEFAULT NULL,
    description     TEXT         DEFAULT NULL,
    filename        VARCHAR(255) NOT NULL,
    mime_type       VARCHAR(50)  DEFAULT 'video/mp4',
    poster          VARCHAR(255) DEFAULT NULL,
    display_order   INT          DEFAULT 0,
    created_at      TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    KEY idx_trainer (trainer_id),
    CONSTRAINT fk_video_trainer FOREIGN KEY (trainer_id)
        REFERENCES formations(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO videos (trainer_id, title, tag, description, filename, mime_type, display_order) VALUES
    ('andrew',   'Accélérer le développement de vos outils',
     'Claude Code',
     'Démonstration concrète de Claude Code pour accélérer le développement applicatif en entreprise.',
     'andrew-claude-code-accelerer-developpement.mp4', 'video/mp4', 1),
    ('andrew',   'Gérer son espace et ses documents',
     'Claude Cowork',
     'Comment organiser ses fichiers et son business avec Claude Cowork.',
     'andrew-claude-cowork-espace-documents.mp4', 'video/mp4', 2),
    ('jb',       'GEMS — System prompts dans Gemini',
     'Gemini',
     'Construire des assistants spécialisés via les GEMS de Gemini avec des system prompts précis.',
     'jb-gemini-gems-system-prompt.mp4', 'video/mp4', 1),
    ('jb',       'Étude et recherche avec Perplexity',
     'Perplexity',
     'Utiliser Perplexity comme moteur de recherche augmenté pour des études et veilles métier.',
     'jb-perplexity-etude-recherche.mp4', 'video/mp4', 2),
    ('timothee', 'Traiter un appel d''offres avec NotebookLM',
     'NotebookLM',
     'Synthétiser et exploiter un appel d''offres entièrement avec NotebookLM.',
     'timothee-notebooklm-traiter-appel-offres.mp4', 'video/mp4', 1),
    ('timothee', 'Créer un GPT d''onboarding',
     'ChatGPT',
     'Concevoir un GPT personnalisé pour automatiser l''onboarding des nouveaux collaborateurs.',
     'timothee-gpt-onboarding.mp4', 'video/mp4', 2),
    ('timothee', 'Créer une infographie récapitulative avec Monalisia',
     'Monalisia',
     'Générer rapidement une infographie professionnelle de synthèse via Monalisia.',
     'timothee-monalisia-infographie.mp4', 'video/mp4', 3),
    ('cedric',   'Confronter son idée à Steve Jobs et Bill Gates',
     'Claude',
     'Utiliser Claude comme sparring partner stratégique en simulant des avis d''experts iconiques.',
     'cedric-claude-confronter-idee.mp4', 'video/mp4', 1),
    ('cedric',   'D''un formulaire de devis à l''estimation automatique',
     'n8n',
     'Workflow n8n complet : du formulaire de demande de devis à l''estimation en sortie.',
     'cedric-n8n-formulaire-devis-estimation.mp4', 'video/mp4', 2),
    ('cedric',   'Veille concurrentielle automatisée',
     'n8n + Claude',
     'Combiner n8n et Claude pour automatiser une veille concurrentielle continue.',
     'cedric-n8n-claude-veille-concurrentielle.mp4', 'video/mp4', 3),
    ('cedric',   'L''onboarding salarié en un clic',
     'n8n + OpenAI',
     'Pipeline n8n + OpenAI pour automatiser intégralement l''onboarding d''un nouveau salarié.',
     'cedric-n8n-openai-onboarding-salarie.mp4', 'video/mp4', 4);
