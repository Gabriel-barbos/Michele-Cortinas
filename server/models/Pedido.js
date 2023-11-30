const { sequelize, Sequelize } = require("../config/db");
const Cliente = require("./Cliente");

const Pedido = sequelize.define('pedidos', {
    largura:{
      type:Sequelize.FLOAT
    },
    altura:{
      type:Sequelize.FLOAT
    },
    status:{
      type: Sequelize.STRING
    },
    valorTotal:{
      type: Sequelize.FLOAT
    }
  });
  
  module.exports = Pedido;