const { sequelize, Sequelize } = require("../config/db");
const Pedido = require("./Pedido");

const Variacao = sequelize.define("variacao", {
  nome: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  preco: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  categoria: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Variacao;

