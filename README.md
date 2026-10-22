# 📌 Mural da Turma

Projeto da aula de Node.js: um mural de recados com back-end em **Node.js + Express**, banco de dados local **SQLite** (o que já vem embutido no Node) e front-end em **HTML, CSS e JavaScript**.

## Como rodar

Pré-requisito: Node.js 22.13 ou mais novo (de preferência a versão LTS). Ao iniciar, pode aparecer um aviso `ExperimentalWarning` sobre o SQLite — é normal.

```bash
npm install     # baixa as dependências listadas no package.json
npm run dev     # inicia o servidor e reinicia sozinho quando você salva um arquivo
```

Abra **http://localhost:3000** no navegador.

## Estrutura

```
mural-da-turma/
├── package.json     → identidade do projeto + dependências + scripts
├── server.js        → servidor Express e rotas da API
├── database.js      → conexão e comandos do banco SQLite
├── mural.db         → criado sozinho na primeira execução
└── public/          → front-end
    ├── index.html
    ├── style.css
    └── script.js
```

## Rotas da API

| Método | Rota                | O que faz              |
|--------|---------------------|------------------------|
| GET    | `/api/recados`      | Lista todos os recados |
| POST   | `/api/recados`      | Cria um recado novo    |
| DELETE | `/api/recados/:id`  | Apaga um recado        |