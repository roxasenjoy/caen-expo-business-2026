# ID Labs — Salon Caen Business Expo 2026

Site web ID Labs (formations IA + quiz de maturité), version PHP / Apache / MySQL packagée avec Docker Compose.

## Architecture

| Service       | Image                | Port (host) | Rôle                                          |
| ------------- | -------------------- | ----------- | --------------------------------------------- |
| `web`         | `php:8.2-apache`     | **9000**    | Application web (HTML/PHP, sert `public/`)    |
| `db`          | `mysql:8.0`          | **9090**    | Base de données MySQL (volume persistant)     |
| `phpmyadmin`  | `phpmyadmin:5`       | **9091**    | Interface d'administration de la BDD          |

URLs locales :

- Site public : <http://localhost:9000>
- Page admin  : <http://localhost:9000/admin.php> (passe par `login.php`)
- phpMyAdmin  : <http://localhost:9091>
- MySQL CLI   : `mysql -h 127.0.0.1 -P 9090 -u idlabs_app -p idlabs`

## Démarrage rapide

```bash
# 1. Le fichier .env est généré, avec un code admin sécurisé
#    et les credentials MySQL. Relire et adapter si besoin :
cat .env

# 2. Construire l'image et lancer la stack
docker compose up -d --build

# 3. Vérifier l'état
docker compose ps
docker compose logs -f web
```

Au premier démarrage, le conteneur `db` exécute `docker/mysql/init.sql`
qui crée les tables et insère les 6 formateurs (dont **Andrew MAHE**)
ainsi que leurs sessions.

Pour arrêter :

```bash
docker compose down            # arrête, garde le volume
docker compose down -v         # arrête ET supprime la BDD (reset complet)
```

## Identifiants admin

| Champ          | Valeur (à transmettre en confidentiel)         |
| -------------- | ---------------------------------------------- |
| URL            | <http://localhost:9000/login.php>              |
| Code initial   | `d1EywW4CNAcBubDgXTbl` (issu du `.env`)        |

### Comment c'est sécurisé

- Le code admin est stocké en BDD dans la table `admin_credentials`
  sous forme de **hash bcrypt** (cost 12). Aucun code en clair n'est
  jamais persisté côté serveur.
- La variable `ADMIN_PASSWORD` du `.env` ne sert qu'au **bootstrap** :
  au tout premier login réussi, le hash est créé et stocké en BDD.
  Ensuite, le `.env` n'est plus consulté pour l'authentification —
  le hash en BDD fait foi.
- `password_verify()` (temps constant) est utilisé pour comparer
  une saisie au hash, et `password_needs_rehash()` met automatiquement
  à jour le hash si la politique évolue.

### Comment changer le code

1. Connecte-toi sur <http://localhost:9000/admin.php>
2. Section **Sécurité — Code admin**, saisis le code actuel + le nouveau
   (12 caractères minimum, confirmation requise)
3. Effet immédiat — le `.env` devient secondaire.

> Ne jamais commit `.env` (déjà ignoré par `.gitignore`).

## Sessions PHP — stockage chiffré en BDD

Au lieu d'écrire les fichiers de session sur le système de fichiers
du conteneur, ID Labs utilise un session handler personnalisé
(`public/includes/session_handler.php`) qui :

- Stocke chaque session dans la table `sessions` (LONGBLOB).
- Chiffre le payload avec **AES-256-CBC + HMAC-SHA256** (encrypt-then-MAC),
  IV aléatoire de 16 octets par session.
- Dérive deux clés distinctes (chiffrement / authenticité) à partir
  de `SESSION_SECRET` du `.env` via SHA-256 + sel.
- Nettoie automatiquement les sessions expirées via le GC PHP.

Pour faire tourner les clés : changer `SESSION_SECRET` dans `.env`
puis `TRUNCATE TABLE sessions;` (les utilisateurs devront se reconnecter).

## Identifiants MySQL (par défaut)

| Type   | Utilisateur   | Mot de passe                       | Base    |
| ------ | ------------- | ---------------------------------- | ------- |
| App    | `idlabs_app`  | `idlabs_app_2026_change_me`        | `idlabs`|
| Root   | `root`        | `root_idlabs_2026_change_me`       | —       |

À modifier impérativement avant tout passage en production
(éditer `.env` puis `docker compose down -v && docker compose up -d --build`).

## Arborescence

```
.
├── .env                 # variables sensibles (ignoré par git)
├── .env.example         # template à copier
├── docker-compose.yml
├── Dockerfile           # image web (Apache + PHP 8.2 + PDO MySQL)
├── docker/
│   ├── apache/000-default.conf
│   └── mysql/init.sql   # schéma + seed (6 formateurs + sessions)
└── public/              # DocumentRoot Apache
    ├── index.php        # landing
    ├── formations.php   # liste des formations + inscription
    ├── quiz.php         # diagnostic CIA + résultats
    ├── login.php        # accès admin (code unique)
    ├── logout.php
    ├── admin.php        # tableau de bord (protégé)
    ├── styles.css
    ├── app.js
    ├── photos/          # avatars des formateurs (Andrew MAHE inclus)
    ├── api/
    │   ├── formations.php                  # GET formations + sessions
    │   ├── formations_register.php         # POST inscription
    │   ├── quiz_submit.php                 # POST résultat quiz
    │   ├── admin_export_formations.php     # CSV (protégé)
    │   └── admin_export_quiz.php           # CSV (protégé)
    └── includes/
        ├── config.php   # lit l'env, expose les constantes
        ├── db.php       # connexion PDO singleton
        ├── auth.php     # session PHP, idlabs_require_admin()
        ├── helpers.php  # JSON, validation
        ├── header.php   # entête HTML commun (logo + nav)
        └── footer.php
```

## Schéma BDD

- `formations` : un formateur par ligne (id, trainer, tag, title, photo, tarifs, etc.)
- `formation_sessions` : sessions datées d'une formation (capacity = 10)
- `formation_registrations` : inscriptions effectives (FK vers session)
- `quiz_results` : un résultat de diagnostic + scores par dimension (JSON)
- `quiz_answers` : détail question/réponse (1 ligne par question)
- `admin_credentials` : hash bcrypt du code admin (1 ligne, id = 1)
- `sessions` : sessions PHP, payload chiffré (AES-256-CBC + HMAC)

## Andrew MAHE — formateur ajouté

Une 6ᵉ formation a été ajoutée :

- **Formateur** : Andrew MAHE
- **Tag** : *Claude & IA Entreprise*
- **Titre** : *Booster votre entreprise avec l'écosystème Claude : Chat, Cowork & Code*
- **Sessions** : 4 juin 2026 et 24 septembre 2026 (Caen) — *dates aléatoires, à ajuster ultérieurement*
- **Tarifs** : 350 € (salon) / 400 € (normal)
- **Photo** : `public/photos/andrew_mahe.jpg`

À la fin du quiz, Andrew est recommandé pour les profils déjà
matures sur deux dimensions :

- **Usages & Outils IA** (score ≥ 70) → *Industrialisation Claude*
- **Processus & Gouvernance** (score ≥ 70) → *Déploiement Claude maîtrisé*

Pour ajuster les déclencheurs, voir `RECOMMENDATIONS` dans `public/app.js`.

## Notes de sécurité

- Sessions PHP avec cookie `httponly` + `samesite=Lax`.
- Code admin comparé en temps constant via `hash_equals()`.
- Toutes les requêtes SQL utilisent des requêtes préparées (PDO).
- Le dossier `public/includes/` est interdit en accès direct via Apache.
- La page de login génère un token CSRF et applique un délai (anti-bruteforce).
- Pour passer en HTTPS : terminer côté reverse proxy puis activer
  `secure=true` dans `idlabs_session_start()` (`public/includes/auth.php`).

## Développement

Activer le mode dev (affichage des erreurs) :

```bash
# dans .env
APP_ENV=development
```

Reconstruire après modif du `Dockerfile` :

```bash
docker compose build web && docker compose up -d
```

Consulter les logs Apache :

```bash
docker compose logs -f web
```
