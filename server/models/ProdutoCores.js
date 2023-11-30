const { sequelize, Sequelize } = require("../config/db");

const ProdutoCores = sequelize.define('produtocores', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey:true,
        allowNull: false,
        autoIncrement:true
      },
    teste:{
        type: Sequelize.STRING,
        allowNull: true
    }
  });
  
  module.exports = ProdutoCores;