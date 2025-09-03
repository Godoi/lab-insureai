// scripts/fallback-log.js
const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, '../logs');
const logFile = path.join(logDir, 'trello-fallback.log');

// Cria a pasta logs se não existir
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

// Lê variáveis do ambiente
const prNumber = process.env.GH_PR_NUMBER || 'unknown';
const prTitle = process.env.GH_PR_TITLE || 'unknown';
const targetBranch = process.env.GH_TARGET_BRANCH || 'unknown';
const timestamp = new Date().toISOString();

// Gera o log
const logEntry = `[FALLBACK ${timestamp}] PR #${prNumber} "${prTitle}" para ${targetBranch}\n`;

// Salva no arquivo
fs.appendFileSync(logFile, logEntry, 'utf8');

console.log(`✅ Log salvo: ${logFile}`);
console.log(logEntry.trim());