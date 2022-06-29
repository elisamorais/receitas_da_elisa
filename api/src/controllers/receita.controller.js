const db = require("../config/database");

//método responsável por criar uma nova 'Receita':

exports.createReceita = async (req, res) => {
    const { nome, ingredientes, modo_de_preparo, foto, id_categoria} = req.body;
    const { rows } = await db.query(
        "INSERT INTO receita (nome, ingredientes, modo_de_preparo, foto, id_categoria) VALUE ($1, $2, $3, $4, $5)"
        [nome, ingredientes, modo_de_preparo, foto, id_categoria]
    );
    res.status(201).send({
        message: "Receita added successfully!",
        body: {
            product: { nome, ingredientes, modo_de_preparo, foto, id_categoria }
        }
    });
};

exports.listAllReceiras =  async (req, res) => {
    const response = await db.query('SELECT * from receitas ORDER BY nome ASC');
    res.status(200).send(response.rows);
};