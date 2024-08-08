# Loan Simulation - API

## Projeto
Este projeto consiste na API back-end desenvolvida em NestJS que faz parte do projeto "loan-simulation". Esta API serve como o motor que alimenta a aplicação Web, permitindo que pessoas físicas efetivem empréstimos com base no estado fornecido e nas taxas de juros específicas da região. A API é projetada para ser eficiente, escalável e fácil de manter, fornecendo endpoints que suportam todas as funcionalidades da aplicação de simulação de empréstimos. O repositório da interface front-end pode ser acessado através do seguinte link: [loan-simulation-gui](https://github.com/luizottavioc/loan-simulation-gui)

## Tecnologias

Este projeto foi construído utilizando as seguintes tecnologias:
- **NestJS**;
- **TypeScript**;
- **Sequelize**;
- **PostgreSQL**;
- **Docker**.

## Estrutura de Pastas
A estrutura do projeto é organizada da seguinte forma dentro da pasta `/src`:
- **/database**: Responsável pela configuração do banco de dados utilizando Sequelize. Aqui estão centralizadas as migrações e seeds, permitindo a criação e preenchimento do banco de dados com dados iniciais.
- **/src**: Contém o código-fonte dos módulos principais da API:
  - **/installment**: Módulo responsável por gerenciar as parcelas dos empréstimos, incluindo DTOs de validação, entidades (models), controladores (controllers), serviços (services) e o módulo em si.
  - **/loan**: Módulo que gerencia os empréstimos, com as mesmas estruturas organizacionais (DTO, entity, controller, service, module).
  - **/uf**: Módulo para gerenciamento das unidades federativas (estados), controlando suas taxas de juros e outras funcionalidades relevantes.
  - **/main**: Configurações principais da aplicação, como o registro do CORS e os pipes de validação para DTOs.
- **/tests**: Diretório dedicado aos testes automatizados da aplicação, garantindo a confiabilidade e a estabilidade do código ao longo do tempo.

## Deploy Local
Para rodar a API localmente, siga os passos abaixo:

### Dependências
- **Node.js**: v21.7.3
- **npm**: v10.5.0
- **Docker**: v24.0.7
- **Docker Compose**: v2.21.0

### Passos para Deploy Local
1. **Clone o repositório**:
    ```bash
    git clone git@github.com:luizottavioc/loan-simulation-api.git
    ```

2. **Configure o ambiente**:
    Copie o arquivo `.env.example` e renomeie-o para `.env`. Este arquivo conterá as variáveis de ambiente necessárias para a aplicação, como as credenciais de acesso ao banco de dados.
    ```bash
    cp .env.example .env
    ```

3. **Suba os containers com Docker**:
    Utilize o Docker Compose para iniciar os serviços do banco de dados e outras dependências necessárias.
    ```bash
    docker compose up -d
    ```

4. **Instale as dependências**:
    Navegue até a pasta do projeto e execute o comando abaixo para instalar todas as dependências necessárias:
    ```bash
    npm install
    ```

5. **Inicie o servidor de desenvolvimento**:
    Após configurar o ambiente e iniciar o banco de dados, execute o comando abaixo para iniciar o servidor de desenvolvimento:
    ```bash
    npm run start:dev
    ```

    O servidor estará disponível na porta `8989` por padrão, onde a API poderá ser acessada.
