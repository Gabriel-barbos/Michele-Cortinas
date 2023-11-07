const { sequelize, Sequelize } = require("../config/db");

const Telefone = sequelize.define("telefones", {
  numero: {
    type: Sequelize.STRING,
    allowNull: true,
  },
 
});

module.exports = Telefone;

