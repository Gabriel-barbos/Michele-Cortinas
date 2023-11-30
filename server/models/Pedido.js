const { sequelize, Sequelize } = require("../config/db");
const Cliente = require("./Cliente");

const Pedido = sequelize.define('pedidos', {
    data: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    largura:{
      type:Sequelize.FLOAT
    },
    altura:{
      type:Sequelize.FLOAT
    },
    status:{
      type: Sequelize.STRING
    }
  });
  
  module.exports = Pedido;