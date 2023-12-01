const { sequelize, Sequelize } = require("../config/db");

const Admin = sequelize.define("admins", {
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

module.exports = Admin;

