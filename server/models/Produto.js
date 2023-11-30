const { sequelize, Sequelize } = require("../config/db");
const Pedido = require("./Pedido");

const Produto = sequelize.define("produtos", {
  nome: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: true
  },
  preco: {
    type: Sequelize.FLOAT,
    allowNull: true,
  }
  
});

module.exports = Produto;

