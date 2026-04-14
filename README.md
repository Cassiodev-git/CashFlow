# 💰 CashFlow

Aplicação web de controle financeiro desenvolvida com Node.js e React, permitindo o gerenciamento de transações e categorias de forma prática e organizada.

---

## 🚀 Funcionalidades

- Cadastro e autenticação de usuários (JWT)
- Gerenciamento de transações (receitas e despesas)
- Criação e organização de categorias
- Associação de transações a categorias
- Listagem de transações por usuário
- Interface responsiva para visualização dos dados

---

## 🧠 Regras de Negócio

- Um usuário pode possuir múltiplas transações
- Cada transação está vinculada a uma categoria
- Apenas usuários autenticados podem acessar e manipular seus dados

---

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express
- JWT (autenticação)
- Sequelize (ORM)
- MySQL

### Frontend
- React
- JavaScript
- CSS

---

## 🧱 Arquitetura

O backend foi estruturado seguindo organização em camadas:

- Controllers → controle das requisições
- Services → regras de negócio
- Repositories → acesso ao banco de dados

---

## 🔐 Autenticação

A aplicação utiliza autenticação baseada em **JWT (JSON Web Token)**, garantindo que apenas usuários autenticados possam acessar e manipular seus dados.

---

## 🗄️ Banco de Dados

Utiliza banco relacional (MySQL) com Sequelize para modelagem das entidades e seus relacionamentos.

Principais entidades:

- Usuário
- Transação
- Categoria

---

## 🎯 Objetivo

Projeto desenvolvido com foco em prática de desenvolvimento backend, organização de código e construção de aplicações completas com integração frontend e backend.

---

## 🚧 Status do Projeto

Em desenvolvimento.

Atualmente em evolução com foco na página de transações, incluindo:
- edição e exclusão de transações
- criação, edição e exclusão de categorias
- melhorias na organização e usabilidade da interface

---

## 🚀 Melhorias Futuras

- implementação de filtros de transações
- criação da página de configuração do usuário
- evolução da aplicação para versão mobile

---

## 📌 Observações

Projeto desenvolvido com foco em prática real de desenvolvimento backend e frontend, aplicando conceitos como autenticação, organização em camadas e modelagem de dados.

A aplicação está em constante evolução, acompanhando meu aprendizado e sendo utilizada como base para consolidar boas práticas e construção de sistemas completos.