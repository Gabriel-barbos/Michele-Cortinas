const { sequelize, Sequelize } = require("../config/db");

const Imagem = sequelize.define('imagens', {
    nomeArquivo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    isCapa:{
        type: Sequelize.BOOLEAN,
        allowNull: true,
    }
  });
  
  module.exports = Imagem;