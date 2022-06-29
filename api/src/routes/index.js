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
        menssage: 'Categoria criada com sucesso123.',
        version: '1.0.0',
    });
});
//esse é o arquivo que chama no postman. 
//tentar unificar o outro arquivo ou excluir ele aqui no index. 
//entender como funciona o arquivo individual das rotas pra poder excluir um 
module.exports = router;

