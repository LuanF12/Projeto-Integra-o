// database.js — cuida de tudo que envolve o banco de dados
// Usamos o SQLite que já vem dentro do Node.js (não precisa instalar nada!)
const { DatabaseSync } = require('node:sqlite');

// Abre (ou cria, se não existir) o arquivo mural.db na pasta do projeto
const db = new DatabaseSync('mural.db');

// Cria a tabela de recados na primeira vez que o servidor roda
db.exec(`
CREATE TABLE IF NOT EXISTS recados (
id INTEGER PRIMARY KEY AUTOINCREMENT,
autor TEXT NOT NULL,
mensagem TEXT NOT NULL,
criado_em TEXT DEFAULT (datetime('now', 'localtime'))
)
`);

// Funções que o servidor vai usar
function listarRecados() {
return db.prepare('SELECT * FROM recados ORDER BY id DESC').all();
}

function criarRecado(autor, mensagem) {
const resultado = db
.prepare('INSERT INTO recados (autor, mensagem) VALUES (?, ?)')
.run(autor, mensagem);
return db.prepare('SELECT * FROM recados WHERE id = ?').get(resultado.lastInsertRowid);
};

function apagarRecado(id) {
const resultado = db.prepare('DELETE FROM recados WHERE id = ?').run(id);
return resultado.changes > 0; // true se apagou alguma linha
}

module.exports = { listarRecados, criarRecado, apagarRecado };