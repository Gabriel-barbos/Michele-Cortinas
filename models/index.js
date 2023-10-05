const { db } = require("../config/db");

const models = {};

models.cliente = require('./Cliente.js')(db)

module.exports = models