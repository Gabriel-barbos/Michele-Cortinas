const { sequelize, Sequelize } = require("../config/db");
const Pedido = require("./Pedido");

const Cliente = sequelize.define("clientes", {
  nome: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  sobrenome: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});

module.exports = Cliente;
