// scripts/fallback-log.js
const fs = require('fs');
const path = require('path');

// Dados do evento (vindos do GitHub Actions)
const eventData = {
  action: process.env.GH_ACTION || 'unknown',
  pr_number: process.env.GH_PR_NUMBER || null,
  pr_title: process.env.GH_PR_TITLE || 'Sem título',
  target_branch: process.env.GH_TARGET_BRANCH || 'unknown',
  card_id: process.env.TRELLO_CARD_ID || 'n/a',
  timestamp: new Date().toISOString(),
  status: 'Trello unreachable - fallback ativado'
};

// Caminho do log
const logFile = path.join(__dirname, '..', 'logs', 'trello-fallback.json');

// Cria diretório se não existir
if (!fs.existsSync(path.dirname(logFile))) {
  fs.mkdirSync(path.dirname(logFile), { recursive: true });
}

// Salva o log
fs.appendFileSync(logFile, JSON.stringify(eventData) + '\n', 'utf-8');

console.log(`📝 Fallback log salvo: ${logFile}`);
console.log(`➡️ Ação: ${eventData.action} na branch ${eventData.target_branch}`);