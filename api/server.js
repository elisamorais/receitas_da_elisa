/* Este arquivo é o responsável por toda a configuração e execução.*/

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplicação executando na porta', port);

});
