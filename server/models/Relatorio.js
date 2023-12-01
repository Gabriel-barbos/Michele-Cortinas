const { sequelize, Sequelize } = require("../config/db");

const Relatorio = sequelize.define("relatorios", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});

module.exports = Relatorio;
