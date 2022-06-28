const express = require('express');
const cors = require('cors');

const app = express();

//Rotas para a api:

const index = require('./routes/index');
// const productRoute = require('./routes/produt.routes');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.json({ type: 'aplication/vnd.api+json' }));
app.use(cors());

app.use(index);
//app.use('./api/', productRoute);


module.exports = app;