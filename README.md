# CashFlow API

API REST para gerenciamento de transações financeiras pessoais.

Este projeto permite registrar receitas e despesas, consultar transações, atualizar registros e remover dados, funcionando como o backend de um gestor financeiro.

## Tecnologias utilizadas

* Node.js
* Express
* Sequelize
* MySQL
* Dotenv

## Estrutura do projeto

```
src/
 ├── controllers
 ├── services
 ├── repositories
 ├── models
 ├── routes
 └── config
```

Arquitetura utilizada:

```
Controller → Service → Repository → Model
```

## Funcionalidades

* Criar transação
* Listar transações
* Buscar transação por ID
* Atualizar transação
* Remover transação

Cada transação possui:

* type (income ou expense)
* value
* description
* category
* date

## Instalação

Clone o repositório:

```
git clone https://github.com/Cassiodev-git/CashFlow.git
```

Entre na pasta do projeto:

```
cd cashflow
```

Instale as dependências:

```
npm install
```

## Configuração do ambiente

Crie um arquivo `.env` na raiz do projeto:

```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
PORT=9000
```

## Executar o projeto

Modo desenvolvimento:

```
npm run dev
```

Ou:

```
node app.js
```

A API ficará disponível em:

```
http://localhost:9000
```

## Rotas da API

Listar transações

```
GET /transactions
```

Buscar por ID

```
GET /transactions/:id
```

Criar transação

```
POST /transactions
```

Atualizar transação

```
PUT /transactions/:id
```

Deletar transação

```
DELETE /transactions/:id
```

## Exemplo de requisição

Criar transação:

```json
{
  "type": "expense",
  "value": 150,
  "description": "Compras no mercado",
  "category": "alimentacao",
  "date": "2026-03-15"
}
```

## Melhorias futuras

* Middleware de validação de dados
* Sistema de usuários
* Sistema de categorias
* Dashboard financeiro
* Autenticação com JWT

## Licença

Projeto desenvolvido para fins de estudo.
