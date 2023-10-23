const { db, sequelize } = require("../config/db");

const models = {};

models.cliente = require('./Cliente.js')(db)
models.pedido = require('./Pedido.js')(db)
models.produto = require('./Produto')(db)

sequelize.sync({ force: true });

module.exports = models