#!/bin/bash

echo "📦 Gerando README para produção..."

cat << 'EOF' > README.prod.md
# 🛡️ InsureAI – Assistente Inteligente de Seguros (Versão de Produção)

> Sistema full-stack para simulação de seguros com IA.

![.NET](https://img.shields.io/badge/.NET-7.0-purple)
![React](https://img.shields.io/badge/React-18-blue)
![OpenAI](https://img.shields.io/badge/OpenAI-API-green)

---

## 🚀 Recursos

- Simulação de seguro automóvel
- Chatbot com inteligência artificial
- Autenticação segura
- Dashboard personalizado

---

## 🔐 Como Usar

Este sistema é usado para demonstração de habilidades em:
- Full-stack (React + .NET)
- Integração com IA
- Automação de CI/CD

---

Desenvolvido por [Anderson Godoi Bernardes] – [Projeto](https://github.com/Godoi/lab-insureai)
EOF

echo "✅ README.prod.md gerado com sucesso!"