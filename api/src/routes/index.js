//arquivo responsável pela chamada da Api da aplicação

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        sucess: 'true',
        message: 'Seja bem-vindo(a) ao meu site de receitas',
        version: '1.0.0',
    });
});

router.post('/api/categoria/', (req,res) =>{
    res.status(201).send({
        sucess: 'true',
        menssage: 'Categoria criada com sucesso.',
        version: '1.0.0',
    });
});

module.exports = router;

