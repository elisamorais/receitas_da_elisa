//rota responsável por listar todos as 'receitas': (GET): localhoast:3000/api/receitas

const { router } = require("../app");

router.get('/products', receitaController.listAllReceitas);
