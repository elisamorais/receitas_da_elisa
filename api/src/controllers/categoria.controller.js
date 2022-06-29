const db = require("../config/database");

//método responsável por criar uma nova 'Categoria':

exports.createCategoria = async (req, res) => {
    const { nome} = req.body;
    const { rows } = await db.query("INSERT INTO categoria (nome) VALUE ($1)", [nome]);
    
    res.status(201).send({
        message: "Categoria added successfully123!",
        body: {
            categoria: { nome }
        },
    });
};