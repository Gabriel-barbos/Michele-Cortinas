const { sequelize, Sequelize } = require("../config/db");

const Imagem = sequelize.define('imagens', {
    nomeArquivo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    extensao:{
        type: Sequelize.STRING
    }
  });
  
  module.exports = Imagem;