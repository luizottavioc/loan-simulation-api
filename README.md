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

## Endpoints

### 1. Get All UFs  
**Endpoint**: `GET /uf`  
Este endpoint retorna uma lista de todas as Unidades Federativas (UFs) cadastradas no sistema, incluindo informações como nome, sigla, e taxa de juros.  
**Exemplo de Resposta**:
```json
[
    {
        "id": 1,
        "name": "Minas Gerais",
        "acronym": "MG",
        "interestRate": 0.01,
        "createdAt": "2024-08-07T23:30:27.052Z",
        "updatedAt": "2024-08-07T23:30:27.052Z"
    },
    {
        "id": 2,
        "name": "São Paulo",
        "acronym": "SP",
        "interestRate": 0.008,
        "createdAt": "2024-08-07T23:30:27.059Z",
        "updatedAt": "2024-08-07T23:30:27.059Z"
    }
]
```

### 2. Get All Loans
**Endpoint**: `GET /loan`  
Este endpoint retorna uma lista de todos os empréstimos cadastrados no sistema, incluindo detalhes como CPF do cliente, valor do empréstimo, taxa de juros mensal, e a UF associada. Além disso, inclui informações sobre as parcelas associadas ao empréstimo.  
**Exemplo de Resposta**:
```json
[
    {
        "id": 8,
        "clientCPF": "12312312344",
        "clientDateOfBirth": "2002-04-05T00:00:00.000Z",
        "ufId": 1,
        "amount": 6000000,
        "percentMonthInterest": 1,
        "wantToPayPerMonth": 1500000,
        "totalInterest": 154552,
        "createdAt": "2024-08-08T02:45:14.563Z",
        "updatedAt": "2024-08-08T02:45:14.563Z",
        "uf": {
            "id": 1,
            "name": "Minas Gerais",
            "acronym": "MG",
            "interestRate": 0.01,
            "createdAt": "2024-08-08T02:28:39.732Z",
            "updatedAt": "2024-08-08T02:28:39.732Z"
        },
        "installments": [
            {
                "id": 36,
                "loanId": 8,
                "balanceDue": 6000000,
                "interest": 60000,
                "value": 1500000,
                "dueDate": "2024-08-07T00:00:00.000Z",
                "createdAt": "2024-08-08T02:45:14.566Z",
                "updatedAt": "2024-08-08T02:45:14.566Z"
            },
            {
                "id": 40,
                "loanId": 8,
                "balanceDue": 153022,
                "interest": 1530,
                "value": 154552,
                "dueDate": "2024-12-07T00:00:00.000Z",
                "createdAt": "2024-08-08T02:45:14.566Z",
                "updatedAt": "2024-08-08T02:45:14.566Z"
            }
            [...]
        ]
    }
]
```

### 3. Get All Installments
**Endpoint**: `GET /installments`  
Este endpoint retorna uma lista de todas as parcelas (installments) associadas a empréstimos, com informações como valor da parcela, saldo devedor, juros, e data de vencimento.  
**Exemplo de Resposta**:
```json
[
    {
        "id": 1,
        "loanId": 1,
        "balanceDue": 6000000,
        "interest": 60000,
        "value": 1500000,
        "dueDate": "2024-08-07T00:00:00.000Z",
        "createdAt": "2024-08-08T02:28:43.665Z",
        "updatedAt": "2024-08-08T02:28:43.665Z"
    },
    {
        "id": 2,
        "loanId": 1,
        "balanceDue": 4560000,
        "interest": 45600,
        "value": 1500000,
        "dueDate": "2024-09-07T00:00:00.000Z",
        "createdAt": "2024-08-08T02:28:43.665Z",
        "updatedAt": "2024-08-08T02:28:43.665Z"
    }
]
```

### 4. Add Loan
**Endpoint**: `POST /loan`  
Este endpoint permite a criação de um novo empréstimo para um cliente, especificando detalhes como CPF, data de nascimento, valor do empréstimo, taxa de juros mensal, entre outros. Além disso, permite a inclusão de parcelas associadas ao empréstimo.  
**Formato do Corpo Esperado da Requisição**:
```json
{
  "clientCPF": "string",
  "clientDateOfBirth": "date",
  "ufId": "number",
  "amount": "number",
  "percentMonthInterest": "number",
  "wantToPayPerMonth": "number",
  "totalInterest": "number",
  "installments": [
    {
      "balanceDue": "number",
      "interest": "number",
      "value": "number",
      "dueDate": "date"
    }
  ]
}
```
**Exemplo de Corpo da Requisição**:
```json
{
  "clientCPF": "12312312344",
  "clientDateOfBirth": "2002-12-05T00:00:00.000Z",
  "ufId": 1,
  "amount": 6000000,
  "percentMonthInterest": 1,
  "wantToPayPerMonth": 1500000,
  "totalInterest": 154552,
  "installments": [
    {
      "balanceDue": 6000000,
      "interest": 60000,
      "value": 1500000,
      "dueDate": "2024-08-07T00:00:00.000Z"
    }
  ]
}
```
**Exemplo de Resposta**:
```json
{
    "id": 17,
    "clientCPF": "12312312344",
    "clientDateOfBirth": "2002-12-05T00:00:00.000Z",
    "ufId": 1,
    "amount": 6000000,
    "percentMonthInterest": 1,
    "wantToPayPerMonth": 1500000,
    "totalInterest": 154552,
    "updatedAt": "2024-08-09T01:44:31.808Z",
    "createdAt": "2024-08-09T01:44:31.808Z"
}
```


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
