const { sequelize, Sequelize } = require("../config/db");

const Endereco = sequelize.define("enderecos", {
  rua: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  cep: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  bairro: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Endereco;

