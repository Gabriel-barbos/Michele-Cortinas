const { sequelize, Sequelize } = require("../config/db");

const Carrinho = sequelize.define("carrinhos", {
  valorTotal: {
    type: Sequelize.FLOAT,
    allowNull: true,
  }
});

module.exports = Carrinho;

