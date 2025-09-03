
---

## 🔒 3. `SECURITY.md` – Segurança

```md
# 🔒 Política de Segurança do InsureAI

Obrigado por se preocupar com a segurança do projeto **InsureAI**.

---

## 🛡️ Escopo

Este projeto é um **sistema de demonstração (portfólio)** e não está em produção.  
Não armazena dados reais de clientes ou seguradoras.

---

## 🚫 O que NÃO é considerado vulnerabilidade
- Erro de carregamento do Trello (`Your browser was unable to load...`) → é um problema de rede, não de segurança
- Uso de JWT sem refresh token → intencional (MVP)
- Chaves da OpenAI em variáveis → devem ser usadas apenas como secrets no GitHub

---

## 📨 Como reportar vulnerabilidades

Se encontrar uma vulnerabilidade real (ex: injeção de código, vazamento de dados), envie um e-mail para:

📧 `andersongodoipoa@gmail.com`

Por favor, inclua:
- Descrição clara do problema
- Passos para reproduzir
- Impacto potencial

---

## ✅ Boas práticas aplicadas
- JWT com expiração
- Validação de entrada no backend
- GitHub Actions com secrets protegidos
- Fallback seguro em caso de falha