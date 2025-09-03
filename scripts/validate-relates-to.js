// scripts/validate-relates-to.js
const fs = require('fs');
const path = require('path');

// Lê o corpo da issue ou PR (vindo do GitHub)
const inputPath = process.argv[2];
if (!inputPath) {
  console.error('❌ Use: node validate-relates-to.js <caminho-do-arquivo>');
  process.exit(1);
}

try {
  const content = fs.readFileSync(inputPath, 'utf-8');

  // Procura por "Relates to: https://trello.com/c/..."
  const regex = /Relates to:[^\S\n]*https:\/\/trello\.com\/c\/[a-zA-Z0-9]+/;

  if (regex.test(content)) {
    console.log('✅ "Relates to" encontrado e válido!');
    process.exit(0);
  } else {
    console.error('❌ Falha: "Relates to" não encontrado ou formato incorreto.');
    console.error('💡 Exemplo correto: Relates to: https://trello.com/c/kz7q1L3x');
    process.exit(1);
  }
} catch (err) {
  console.error('❌ Erro ao ler o arquivo:', err.message);
  process.exit(1);
}