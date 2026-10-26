# Event platform ignite

Plataforma de eventos e aulas desenvolvida com React e TypeScript, com navegação entre páginas e integração com uma API GraphQL para disponibilizar o conteúdo da aplicação.

## Funcionalidades

- Página de inscrição na plataforma.
- Página de acesso ao evento.
- Navegação entre aulas por meio de rotas dinâmicas.
- Integração com API GraphQL utilizando Apollo Client.
- Consultas de dados com geração de tipos e hooks para TypeScript.
- Interface estilizada com Tailwind CSS.

## Tecnologias

- React
- TypeScript
- Vite
- GraphQL
- Apollo Client
- React Router DOM
- Tailwind CSS
- date-fns
- Phosphor React

## Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- npm

### 1. Clone o repositório

```bash
git clone https://github.com/wwilliamsantana/event-plataform-ignite.git
```

### 2. Acesse a pasta do projeto

```bash
cd event-plataform-ignite
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e configure as variáveis utilizadas pela aplicação:

```env
VITE_API_URL=sua_url_da_api_graphql
VITE_API_ACCESS_TOKEN=seu_token_de_acesso
```

Substitua os valores pelos dados de acesso da API utilizada pelo projeto. Não compartilhe tokens privados nem os envie para o repositório.

### 5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Acesse no navegador o endereço local informado pelo Vite no terminal.

## Outros comandos

Gerar a versão de produção:

```bash
npm run build
```

Executar uma prévia da versão de produção:

```bash
npm run preview
```

Gerar os tipos e hooks a partir dos documentos GraphQL:

```bash
npm run codegen
```

O comando de geração de código depende do acesso ao schema GraphQL configurado no projeto.

## Rotas da aplicação

| Rota | Descrição |
|---|---|
| `/` | Página de inscrição |
| `/event` | Página do evento |
| `/event/lesson/:slug` | Página do evento com identificação da aula pela URL |

