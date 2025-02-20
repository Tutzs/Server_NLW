# Projeto BackEnd

Por meio da trilha Node da NLW da RocketSeat criei esse projeto.

Para fazer funcionar em sua máquina precisará de:

- Node 22,
- Docker,
- Postgres,


## Passo 1
Clone o repositório

```bash
git clone https://github.com/Tutzs/Server_NLW.git
```

## Passo 2
Instale as dependências na raíz do projeto

```bash
npm i 
```

## Passo 3
Crie um arquivo na raíz do seu projeto chamado .env e configure as variáveis de ambiente baseadas na .env.example

## Passo 4
Configure o docker
```bash
docker compose up -d #-d é uma flag para rodar em background
docker compose down # caso queira derrubar os conteiners
```

## Passo 5
Gere sua tabela no banco de dados com esse comando:

```bash
npx drizzle-kit generate
```

E caso tenha feito alguma mudança nas tabelas use esse comando:

```bash
npx drizzle-kit migrate
```

## Passo 6 
Rode o projeto, vá para o diretório src

```bash
cd src
```

E execute o comando:

```bash
npm run dev
```

Assim seu BackEnd estará funcionando, e para testar basta ir no arquivo "api.http" que todas as rotas já estão lá, só fazer as suas mudanças.