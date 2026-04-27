# 💰 CashFlow

Aplicação web de controle financeiro desenvolvida com Node.js e React, permitindo o gerenciamento de transações e categorias de forma prática e organizada.

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)](https://sequelize.org/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

---

## 📋 Descrição

CashFlow é uma aplicação full-stack desenvolvida como projeto de aprendizado para praticar conceitos de desenvolvimento web moderno, incluindo:
- Construção de APIs RESTful com Node.js e Express
- Autenticação segura com JWT
- Modelagem de dados relacionais com Sequelize e MySQL
- Desenvolvimento de frontend responsivo com React e Vite
- Integração entre frontend e backend
- Organização de código seguindo padrões de arquitetura em camadas

Este projeto está em constante evolução, refletindo meu progresso no curso de Engenharia de Software (3º período) e servindo como base para consolidar boas práticas de desenvolvimento.

---

## ✨ Funcionalidades Implementadas

### 🔐 Autenticação & Segurança
- Cadastro e autenticação de usuários
- Proteção de rotas com middleware JWT
- Comunicação segura entre frontend e backend (CORS configurado)

### 💰 Gestão Financeira
- Criação, leitura, atualização e exclusão de transações (receitas e despesas)
- Criação, leitura, atualização e exclusão de categorias
- Associação de transações a categorias
- Listagem de transações por usuário autenticado

### 🖥️ Interface do Usuário
- Layout responsivo para diferentes tamanhos de tela
- Navegação intuitiva entre as principais funcionalidades
- Feedback visual para ações do usuário

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **Sequelize** - ORM para interação com banco de dados
- **MySQL** - Sistema de gerenciamento de banco de dados relacional
- **JWT** - Implementação de autenticação baseada em tokens
- **CORS** - Middleware para controle de acesso cross-origin
- **dotenv** - Gerenciamento de variáveis de ambiente

### Frontend
- **React** - Biblioteca para construção de interfaces
- **Vite** - Build tool e servidor de desenvolvimento rápido
- **React Router** - Navegação declarativa em SPAs
- **CSS3** - Estilização customizada e responsiva
- **JavaScript ES6+** - Funcionalidades modernas da linguagem

### Ferramentas de Desenvolvimento
- **Git** - Controle de versão
- **npm** - Gerenciador de pacotes
- **ESLint** - Linter para qualidade de código (frontend)

---

## 🧱 Arquitetura

O backend segue uma organização em camadas separando claramente as responsabilidades:

```
src/
├── controllers/     # Manipula requisições HTTP e respostas
├── services/        # Contém a lógica de negócio
├── repository/      # Acesso direto ao banco de dados (Sequelize)
├── models/          # Definição das entidades e relacionamentos
├── middlewares/     # Funções intermediárias (auth, error handling)
├── routes/          # Definição das endpoints da API
├── config/          # Configurações (database, environment)
└── utils/           # Funções auxiliares
```

O frontend está organizado por funcionalidade:
```
src/
├── components/      # Componentes reutilizáveis (buttons, cards, forms)
├── pages/           # Páginas principais da aplicação
├── contexts/        # Context API para gerenciamento de estado global
├── hooks/           # Custom hooks para lógica reutilizável
├── services/        # Comunicação com o backend
├── utils/           # Funções utilitárias
└── routes/          # Definição das rotas da aplicação
```

---

## 🗄️ Modelo de Dados

A aplicação utiliza um banco de dados relacional com três entidades principais:

1. **Usuário**
   - id (PK)
   - name
   - email (único)
   - password (hash)
   - image (opcional)

2. **Categoria**
   - id (PK)
   - name
   - userId (FK)

3. **Transação**
   - id (PK)
   - value
   - type (receita/despesa)
   - date
   - description
   - userId (FK)
   - categoryId (FK)

**Relacionamentos:**
- Usuário 1:N Categoria
- Usuário 1:N Transação
- Categoria 1:N Transação

---

## 🔐 Autenticação

A aplicação utiliza autenticação baseada em **JWT (JSON Web Token)**:
1. Após login bem-sucedido, o servidor retorna um token assinado
2. O frontend armazena o token (em localStorage ou cookie seguro)
3. Para rotas protegidas, o frontend envia o token no header `Authorization`
4. Middleware backend verifica a validade do token antes de processar a requisição
5. Tokens têm tempo de expiração configurado para segurança

---

## 📊 Status Atual

**Em desenvolvimento ativo** - Última atualização: abril de 2026

### ✅ Funcionalidades Concluidas
- [x] Estrutura básica do backend e frontend
- [x] Autenticação de usuários com JWT
- [x] CRUD completo para usuários
- [x] CRUD básico para categorias e transações
- [x] Integração frontend-backend
- [x] Validação básica de dados no backend
- [x] Tratamento de erros centralizado
- [x] Configuração de CORS para desenvolvimento
- [x] Layout responsivo inicial

### 🔧 Em Progresso
- [ ] Melhorias na página de transações (edição e exclusão)
- [ ] Criação, edição e exclusão aprimorada de categorias
- [ ] Melhorias na usabilidade e organização da interface
- [ ] Estados de loading durante requisições
- [ ] Mensagens de feedback mais detalhadas

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (v16 ou superior)
- npm (v8 ou superior)
- MySQL Server (v5.7 ou superior)
- Git

### 📥 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Cassiodev-git/CashFlow.git
   cd CashFlow
   ```

2. **Configure o banco de dados**
   ```bash
   # Acesse o MySQL
   mysql -u root -p

   # Crie o banco de dados
   CREATE DATABASE cashflow;
   EXIT;
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   # Backend
   cd Backend
   cp .env.example .env   
   # Edite .env com suas configurações:
   # DB_HOST=localhost
   # DB_USER=seu_usuario
   # DB_PASSWORD=sua_senha
   # DB_NAME=cashflow
   # JWT_SECRET=sua_chave_secreta
   # PORT=9000

   # Frontend
   cd ../Frontend
   # Verifique se o Vite está configurado para consumir a API em http://localhost:9000
   ```

4. **Instale as dependências**
   ```bash
   # Backend
   cd Backend
   npm install

   # Frontend
   cd ../Frontend
   npm install
   ```

5. **Popule o banco de dados (opcional)**
   O Sequelize sincronizará os modelos automaticamente na primeira execução.
   Para dados de teste iniciais, você pode criar um script de seed.

6. **Inicie os servidores**
   ```bash
   # Backend (em um terminal)
   cd Backend
   npm run dev   # ou node app.js

   # Frontend (em outro terminal)
   cd Frontend
   npm run dev   # Geralmente roda em http://localhost:5173
   ```

7. **Acesse a aplicação**
   Abra seu navegador e vá para: http://localhost:5173

### 🛠️ Scripts Disponíveis

**Backend:**
- `npm run dev` - Inicia o servidor com nodemon (desenvolvimento)
- `npm start` - Inicia o servidor em produção
- `npm test` - Executa os testes (quando implementados)

**Frontend:**
- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Prévia da versão de produção

---

## 🔮 Melhorias Futuras (Roadmap)

### Curto Prazo (1-2 meses)
- [ ] **Segurança:** Implementar hash de senhas com bcrypt
- [ ] **Validação:** Adicionar validação robusta de entrada (Joi/Zod) em todos os endpoints
- [ ] **UX:** Implementar estados de loading e mensagens de feedback no frontend
- [ ] **Testes:** Escrever primeiros testes unitários para serviços críticos
- [ ] **Documentação:** Adicionar Swagger/OpenAPI para documentação da API

### Médio Prazo (3-4 meses)
- [ ] **Funcionalidades:** Implementar filtros e busca avançada de transações
- [ ] **Funcionalidades:** Criar página de configuração do usuário (perfil, preferências)
- [ ] **Performance:** Implementar paginação para listagens grandes
- [ ] **Code Quality:** Refatorar componentes reutilizáveis e custom hooks
- [ ] **DevOps:** Adicionar Dockerfile e docker-compose para facilitar deployment

### Longo Prazo (5+ meses)
- [ ] **Mobile:** Desenvolver versão mobile usando React Native ou PWA
- [ ] **Analytics:** Adicionar relatórios e gráficos de gastos/receitas
- [ ] **Integrações:** Conectar com APIs de bancos ou carteiras digitais (open banking)
- [ ] **Multilíngue:** Suporte a múltiplos idiomas (i18n)
- [ ] **Deploy:** Automatizar CI/CD para plataformas como Vercel, Netlify ou AWS

---

## 🎯 Objetivos de Aprendizado

Este projeto foi desenvolvido com foco nos seguintes objetivos de aprendizado para o curso de Engenharia de Software:

1. **Desenvolvimento Full-Stack**
   - Construir aplicação completa com frontend e backend separados
   - Entender o ciclo de requisição-resposta em aplicações web

2. **Arquitetura de Software**
   - Aplicar padrões de arquitetura em camadas (MVC variação)
   - Separar responsabilidades entre controllers, services e repositories
   - Organizar código de forma escalável e mantenível

3. **Banco de Dados**
   - Modelar relacionamentos entre entidades
   - Utilizar ORM (Sequelize) para abstração de camada de dados
   - Entender conceitos de chaves primárias, estrangeiras e constraints

4. **Autenticação e Segurança**
   - Implementar e entender funcionamento de JWT
   - Boas práticas para armazenamento seguro de tokens
   - Consciência sobre vulnerabilidades comuns (injeção, XSS, CSRF)

5. **Frontend Moderno**
   - Utilizar React com hooks e functional components
   - Gerenciar estado com Context API e useReducer/useState
   - Consumir APIs RESTful de forma assíncrona
   - Criar interfaces responsivas e acessíveis

6. **Ferramentas e Práticas Profissionais**
   - Controle de versão com Git e GitHub
   - Gerenciamento de dependências com npm
   - Configuração de ambientes de desenvolvimento
   - Boas práticas de commit e documentação

---

## 📝 Lições Aprendidas (Até Agora)

Durante o desenvolvimento deste projeto, consegui praticar e consolidar:

✅ **Planejamento de Banco de Dados:** Modelagem eficiente de relacionamentos 1:N  
✅ **API RESTful:** Design coerente de endpoints e uso correto de códigos HTTP  
✅ **Middleware Express:** Criação de funções reutilizáveis para autenticação e tratamento de erros  
✅ **Estado Frontend:** Uso efetivo de useContext e useReducer para estado global  
✅ **Assíncronismo:** Manipulação adequada de promises e async/await  
✅ **Configuração de Ambiente:** Separação de configurações entre desenvolvimento e produção  
✅ **Integração Contínua:** Experiência com build tools modernos (Vite) e hot reloading  

---

## 🤝 Contribuindo

Este é um projeto de aprendizado pessoal, mas sugestões e feedbacks são sempre bem-vindos! Se você tiver ideias para melhorias ou identificar problemas:

1. Faça um **fork** do repositório
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. Faça suas alterações e commit (`git commit -m 'Add: AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

Por favor, siga o padrão de commits:
- `feat:` para novas funcionalidades
- `fix:` para correções de bugs
- `docs:` para alterações na documentação
- `refactor:` para refatoração de código
- `test:` para adição ou modificação de testes
- `chore:` para tarefas de manutenção

---


## 👏 Agradecimentos

- À minha instituição de ensino pelos conhecimentos transmitidos
- À comunidade open source pelas ferramentas e bibliotecas utilizadas
- Aos colegas de curso pelas discussões e troca de experiências
- À minha família pelo apoio durante esse jornada de aprendizado

---

> **Nota importante:** Este projeto foi desenvolvido com fins educacionais e de aprendizado. Embora siga boas práticas de desenvolvimento, pode conter limitações ou vulnerabilidades que não seriam aceitáveis em um ambiente de produção crítico. Use-o como referência de aprendizado, não como solução para aplicações comerciais sem revisão de segurança aprofundada.

**Última atualização:** Abril de 2026  
**Desenvolvido por:** [Cássio] - Estudante de Engenharia de Software, 3º período  
**Inspiração:** Projetos reais de controle financeiro e melhores práticas de desenvolvimento web moderno