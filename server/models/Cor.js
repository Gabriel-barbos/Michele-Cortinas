const { sequelize, Sequelize } = require("../config/db");

const Cor = sequelize.define('cor', {
    cor: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    hex :{
        type: Sequelize.BOOLEAN,
        allowNull: true,
    }
  });
  
  module.exports = Cor;