const { sequelize, Sequelize } = require("../config/db");

const models = {};

models.cliente = require('./Cliente.js')
models.pedido = require('./Pedido.js')
models.produto = require('./Produto.js')


models.cliente.hasMany(models.pedido); //Um Cliente pode ter vários Pedidos

models.pedido.belongsTo(models.cliente); // Cada Pedido está relacionado a um Cliente



sequelize.sync({ force: true });

module.exports = models