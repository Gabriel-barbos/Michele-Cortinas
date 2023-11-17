const { sequelize, Sequelize } = require("../config/db");

const Categoria = sequelize.define("categorias", {
  nome: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});

module.exports = Categoria;
