//@ts-nocheck
//arquivo: src/routes/receitas.routes.js
//descrição: arquivo responsável pelas rotas da api relacionado a classe 'Receita'.

const router = require('express-promise-router')();

const categoriaController = require('../controllers/categoria.controller');

//definindo as todas do CRUD - 'Categoria':

//rota responsavel por criar uma nova 'Categoria':(POST): localhost:3000/api/categoria

router.post('/categoria', categoriaController.createCategoria);

module.exports = router;
