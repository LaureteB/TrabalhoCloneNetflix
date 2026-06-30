const mysql = require('mysql2');

//Abre o terminal e digite:
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'escola',
    database: 'filmes_db'
});

//verificação se conectou ao banco de dados
conexao.connect((erro) => {
    if (erro) {
        console.log ('Erro ao conectar ao banco de dados: ', erro);
    } else {
        console.log('Conexão bem sucedida ao banco de dados!');
    }
});

module.exports = conexao;