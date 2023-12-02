const { sequelize, Sequelize } = require("../config/db");

const Admin = sequelize.define("admins", {
  nome: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: true,
  }
  
});

module.exports = Admin;

