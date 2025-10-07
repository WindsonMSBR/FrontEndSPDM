# Sistema de Gestão para a Distribuidora SPDM - Projeto Integradorgit status

Este projeto é uma aplicação web de gestão para a distribuidora SPDM, desenvolvido como parte do Projeto Integrador do 6º período do curso de Engenharia de Software. O objetivo é aplicar conceitos práticos de desenvolvimento, arquitetura de software e metodologias ágeis para criar uma solução de gestão de negócios.

---

### **Índice**

- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Metodologia](#metodologia)

---

### **Descrição do Projeto**

O sistema visa centralizar e otimizar as operações diárias da distribuidora SPDM, oferecendo controle sobre o catálogo de produtos, gestão de estoque por lotes, registro de vendas e gerenciamento de funcionários. A aplicação está sendo construída com uma arquitetura de API RESTful no back-end e uma interface rica e reativa no front-end.

---

### **Funcionalidades**

-   [x] **US14 - Menu de Navegação:** Interface principal com navegação entre os módulos do sistema, com diferenciação por papel de usuário.
-   [x] **US03 - Catálogo de Produtos:** Visualização dos itens disponíveis para venda, com informações como nome, descrição, preço (atacado/varejo) e estoque.
-   [x] **US13 - Gestão de Estoque:** Sistema de controle de estoque baseado em lotes para cada produto.
-   [ ] **Módulo de Vendas:** Registro de pedidos e controle de vendas.
-   [ ] **Módulo de Funcionários:** Cadastro e gerenciamento de usuários do sistema.
-   [ ] **Dashboard:** Painel com indicadores e relatórios visuais sobre o desempenho da distribuidora.
-   [ ] **Autenticação de Usuários:** Sistema de login e controle de acesso.

---

### **Tecnologias Utilizadas**

As seguintes ferramentas e tecnologias foram usadas na construção do projeto:

#### **Front-end**

-   **[Angular](https://angular.io/):** Framework principal para a construção da interface.
-   **[TypeScript](https://www.typescriptlang.org/):** Superset do JavaScript que adiciona tipagem estática.
-   **[PrimeNG](https://primeng.org/):** Biblioteca de componentes de UI para Angular.
-   **[SCSS](https://sass-lang.com/):** Pré-processador de CSS para estilização avançada.

#### **Back-end (Planejado)**

-   **[Spring Boot](https://spring.io/projects/spring-boot):** Framework para a construção da API REST.
-   **[Java](https://www.java.com/):** Linguagem de programação do back-end.
-   **[PostgreSQL](https://www.postgresql.org/):** Banco de dados relacional.

---

### **Como Executar o Projeto**

Para rodar o front-end do projeto em seu ambiente local, siga os passos abaixo:

#### **Pré-requisitos**

-   [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
-   [Angular CLI](https://cli.angular.io/) (`npm install -g @angular/cli`)
-   [Git](https://git-scm.com/)

#### **Passo a Passo**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd nome-do-repositorio
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute a aplicação:**
    ```bash
    ng serve -o
    ```
    O comando acima iniciará um servidor de desenvolvimento. A flag `-o` abrirá automaticamente a aplicação no seu navegador padrão, no endereço `http://localhost:4200/`.

---

### **Metodologia**

O projeto segue o modelo de ciclo de vida Iterativo Incremental (**Scrum**) com a adoção de práticas do **Extreme Programming (XP)**, como Integração Contínua, Padronização de Código e Desenvolvimento Orientado a Testes (TDD), visando entregas de valor contínuas e um código de alta qualidade.

---
