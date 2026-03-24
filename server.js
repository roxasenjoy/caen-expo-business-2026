const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const DATA_DIR = path.join(__dirname, 'data');
const FORMATIONS_FILE = path.join(DATA_DIR, 'formations_registrations.json');
const QUIZ_FILE = path.join(DATA_DIR, 'quiz_results.json');

// MIME types pour les fichiers statiques
const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
};

// Lire un fichier JSON depuis /data
function readJSON(filePath, defaultValue) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content);
    } catch {
        return defaultValue;
    }
}

// Écrire un fichier JSON dans /data
function writeJSON(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

// Lire le body d'une requête POST
function readBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try { resolve(JSON.parse(body)); }
            catch (e) { reject(e); }
        });
        req.on('error', reject);
    });
}

// Envoyer une réponse JSON
function sendJSON(res, status, data) {
    res.writeHead(status, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end(JSON.stringify(data));
}

// Servir un fichier statique
function serveStatic(res, filePath) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('Not Found');
            return;
        }
        const ext = path.extname(filePath);
        const mime = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': mime });
        res.end(data);
    });
}

const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    const pathname = url.pathname;

    // Gestion des requêtes OPTIONS (CORS preflight)
    if (req.method === 'OPTIONS') {
        res.writeHead(204, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        });
        res.end();
        return;
    }

    // ===== API : Inscription formation =====
    if (req.method === 'POST' && pathname === '/api/formations_registrations') {
        try {
            const body = await readBody(req);
            const { sessionId, registration } = body;

            if (!sessionId || !registration) {
                return sendJSON(res, 400, { error: 'sessionId et registration requis' });
            }

            const regs = readJSON(FORMATIONS_FILE, {});
            if (!regs[sessionId]) regs[sessionId] = [];
            regs[sessionId].push(registration);
            writeJSON(FORMATIONS_FILE, regs);

            console.log(`[Formations] Nouvelle inscription: ${registration.prenom} ${registration.nom} — session ${sessionId}`);
            sendJSON(res, 200, { success: true });
        } catch (e) {
            console.error('[Formations] Erreur:', e.message);
            sendJSON(res, 500, { error: 'Erreur serveur' });
        }
        return;
    }

    // ===== API : Résultat quiz =====
    if (req.method === 'POST' && pathname === '/api/quiz_results') {
        try {
            const result = await readBody(req);

            if (!result || !result.leadData) {
                return sendJSON(res, 400, { error: 'Données quiz invalides' });
            }

            const results = readJSON(QUIZ_FILE, []);
            results.push(result);
            writeJSON(QUIZ_FILE, results);

            console.log(`[Quiz] Nouveau résultat: ${result.leadData.prenom} ${result.leadData.nom} — score ${result.finalScore}`);
            sendJSON(res, 200, { success: true });
        } catch (e) {
            console.error('[Quiz] Erreur:', e.message);
            sendJSON(res, 500, { error: 'Erreur serveur' });
        }
        return;
    }

    // ===== Fichiers statiques =====
    let filePath;
    if (pathname === '/' || pathname === '') {
        filePath = path.join(__dirname, 'index.html');
    } else {
        filePath = path.join(__dirname, pathname);
    }

    // Sécurité : interdire de sortir du répertoire du projet
    if (!filePath.startsWith(__dirname)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    serveStatic(res, filePath);
});

server.listen(PORT, () => {
    console.log(`Serveur iDLabs démarré sur http://localhost:${PORT}`);
    console.log(`Les données sont sauvegardées dans :`);
    console.log(`  - ${FORMATIONS_FILE}`);
    console.log(`  - ${QUIZ_FILE}`);
});
