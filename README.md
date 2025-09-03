# 🛡️ InsureAI – Assistente Inteligente de Seguros

> Plataforma full-stack para simulação de seguros automotivos com IA, desenvolvida com **React**, **.NET** e **OpenAI**.

![Tecnologias](https://img.shields.io/badge/React-TypeScript-blue?logo=react)
![.NET](https://img.shields.io/badge/.NET-7.0-purple)
![OpenAI](https://img.shields.io/badge/OpenAI-API-green)
![Trello](https://img.shields.io/badge/Project%20Management-Trello-orange)
![Vínculo Trello](https://img.shields.io/badge/Issues-%F0%9F%94%97%20Vinculadas%20ao%20Trello-blue?logo=trello&color=0079bf)
---

## 🎯 Objetivo

Desenvolver um sistema que permite:
- Simular seguros automotivos com recomendações personalizadas
- Interagir com um chatbot inteligente (IA)
- Gerenciar perfil e histórico de cotações

Ideal para portfólio em **full-stack**, **seguros digitais** e **IA aplicada**.

---

## ✅ MVP: Funcionalidades Implementadas

Este projeto está no estágio de **MVP (Produto Mínimo Viável)** com as seguintes funcionalidades:

| Funcionalidade | Descrição |
|----------------|---------|
| **Simulação de Seguro Automóvel** | Usuário insere dados (idade, veículo, histórico) e recebe cotação personalizada |
| **Chatbot com IA** | Assistente inteligente usando OpenAI API para responder perguntas sobre seguros |
| **Autenticação de Usuário** | Cadastro e login com JWT no .NET |
| **Dashboard Básico** | Histórico de cotações, métricas simples e navegação segura |
| **Tipo de Seguro** | Apenas **seguro automóvel** |
| **Tipo de Usuário** | Apenas **cliente** (sem corretores ou admin no MVP) |

---

## 📐 Regras de Negócio

### 1. Cálculo do Prêmio
- **Base**: 1.5% do valor do veículo
- **Idade < 25 anos**: +20%
- **Sinistro nos últimos 2 anos**: +30%
- **Carro esportivo**: +15%

> Ex: Carro R$ 80.000 → base: R$ 1.200  
> Motorista 22 anos + sinistro → R$ 1.200 × 1.2 × 1.3 = **R$ 1.872**

### 2. Chatbot
- Usa OpenAI API (GPT)
- Prompt fixo: *"Você é um assistente de seguros chamado InsureBot. Responda de forma clara e educada."*
- Perguntas comuns: "O que é franquia?", "Como faço um seguro?"

### 3. Autenticação
- Registro com email e senha
- Login com JWT (salvo no frontend)
- Somente usuários logados podem salvar cotações

### 4. Dashboard
- Histórico de até 5 cotações
- Média de economia em relação ao mercado
- Link direto para nova simulação

---

## 📊 Gestão do Projeto

Organizado com **Trello** para rastrear tarefas, integração com GitHub e transparência no desenvolvimento.

👉 [Acesse o quadro do Trello](https://trello.com/b/XZ3jv7DX/insure-ai)

### Exemplo de integração:
- Cada funcionalidade tem um **card no Trello**
- Cada card tem uma **issue vinculada no GitHub**
- Cada Pull Request atualiza automaticamente o card

---

## 🛠️ Processo de Desenvolvimento

Este projeto foi desenvolvido com boas práticas de engenharia de software:

- ✅ **Gestão de tarefas com Trello** + integração GitHub
- ✅ **Issues padronizadas** para bugs e features
- ✅ **Commits com rastreabilidade** (`Closes #12`)
- ✅ **Script de setup automático** para facilitar execução
- ✅ **Documentação clara** para outros devs
- ✅ **Automação resiliente** mesmo com erro de carregamento no Trello

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- .NET 7 SDK
- Node.js 18+
- Chave da OpenAI (para IA)

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/lab-insureai.git
cd lab-insureai