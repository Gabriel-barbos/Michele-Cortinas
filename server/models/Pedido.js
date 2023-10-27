const { sequelize, Sequelize } = require("../config/db");
const Cliente = require("./Cliente");

const Pedido = sequelize.define('pedidos', {
    data: {
      type: Sequelize.DATE,
      allowNull: false,
    }
  });
  
  module.exports = Pedido;