const { sequelize, Sequelize } = require("../config/db");
const Pedido = require("./Pedido");

const Variacao = sequelize.define("variacao", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  cor: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Variacao;

