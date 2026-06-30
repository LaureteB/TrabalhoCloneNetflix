const express = require("express");
const app = express();
const cors = require('cors');

const conexao = require('./db');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bem-vindo à API de Filmes!');
});

app.get('/filmes', (req, res) => {
    const sql = "SELECT * FROM filmes";
    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro);
        }
        res.json(resultado);
    });
});

app.post('/filmes', (req, res) => {

    const { nome, ano, genero, capa, resumo } = req.body;
    const sql = "INSERT INTO filmes (nome, ano, genero, capa, resumo) VALUES (?, ?, ?, ?, ?)";

    conexao.query(sql, [nome, ano, genero, capa, resumo], (erro) => {
        if (erro) {
            return res.status(500).json(erro);
        }
        res.send("Filme adicionado com sucesso!");
    });
});

app.put('/filmes/:id', (req, res) => {
    const id = req.params.id;
    const { nome, ano, genero, capa, resumo } = req.body;


    const sql = "UPDATE filmes SET nome =?, ano =?, genero =?, capa =?, resumo =? WHERE id = ?";


    conexao.query(sql, [nome, ano, genero, capa, resumo, id], (erro) => {
        if (erro) {
            return res.status(500).json(erro);
        }
        res.send("Filme Modificado!");
    });
});


app.delete('/filmes/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM filmes WHERE id = ?";
    conexao.query(sql, [id], (erro) => {
        if (erro) {
            return res.status(500).json(erro);
        }
        res.send('Filme deletado com sucesso!');
    });
});

app.listen(3000,"0.0.0.0", () => {
    console.log('Servidor rodando em http://localhost:3000');
});