//@ts-nocheck
//arquivo: src/routes/receitas.routes.js
//descrição: arquivo responsável pelas rotas da api relacionado a classe 'Receita'.

const router = require('express-promise-router')();

const receitaController = require('../controllers/receita.controller');

//definindo as todas do CRUD - 'Categoria':

//rota responsavel por criar uma nova 'Receita':(GET): localhost:3000/api/receita

router.post('/receita', receitaController.createReceita);

module.exports = router;
