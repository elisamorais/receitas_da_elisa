//arquivo: config/database.js
//descrição: arquivo será responsável pelas 'connectionStrings da 
// aplicação: PostgresQL.

const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();
// ==> Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
pool.on('connect', () => {
  console.log('Base de Dados conectada com sucesso!');
});
module.exports = {
  query: (text, params) => pool.query(text, params),
};