const { db } = require("../config/db");

modelCliente.cliente = require('./Cliente.js')(db)

module.exports = modelCliente