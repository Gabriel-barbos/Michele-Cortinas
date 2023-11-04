require("dotenv").config();

const Produto = require("../models").produto;
const Imagem = require("../models").imagem;

const path = require("path");

// Pegar um produto
const createOneImagem = async (req, res) => {
    let id = req.body.id
    const files = req.files;
    files.forEach((file)=>{
        
        let nomeArquivo = file.filename;
      const imagem = Imagem.create({ nomeArquivo: nomeArquivo, produtoId: id }); // Insert imagem no banco de dados
      })
      res.status(200).send(categoria);
};

// delete produto por id
const deleteOneImagem = async (req, res) => {
  try {
    let id = req.params.id;
    const image = imagem.findOne({})
    await Imagem.destroy({ where: { id: id } });
    res.status(200).send("imagem deletada");
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  createOneImagem,
  deleteOneImagem,
};
