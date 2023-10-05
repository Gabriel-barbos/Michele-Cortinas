const { db, sequelize } = require("../config/db");

const models = {};

models.cliente = require('./Cliente.js')(db)

sequelize.sync({ force: false });

module.exports = models