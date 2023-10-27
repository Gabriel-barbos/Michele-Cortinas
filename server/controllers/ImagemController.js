require("dotenv").config();

const Produto = require("../models").imagem;

const createImagem = async (req, res) => {

    const imagePath = "/server/imagens/"

    let info = {
      nomeArquivo: req.body.nomeArquivo,
      extensao: req.boy.extensao
    };
  
    const imagem = await Imagem.create(info);
    res.status(200).send(produto);
  };





  module.exports = {
    createProduto,
    getAllProduto,
    getOneProduto,
    updateProduto,
    deleteProduto,
  };
  
  