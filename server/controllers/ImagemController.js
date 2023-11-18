require("dotenv").config();

const Produto = require("../models").produto;
const Imagem = require("../models").imagem;
const fs = require("fs");
const path = require("path");

// Pegar um produto
const createOneImagem = async (req, res) => {
  let id = req.body.id;
  const file = req.file;

  let nomeArquivo = file.filename;
  const imagem = Imagem.create({ nomeArquivo: nomeArquivo, produtoId: id }); // Insert imagem no banco de dados
  res.status(200).send("imagem criada");
};

// delete produto por id
const deleteOneImagem = async (req, res) => {
  try {
    let id = req.params.id;
    const image = await Imagem.findOne({ where: { id: id } });
    const deleteImage = await Imagem.destroy({ where: { id: id } });
    console.log(image)

    if (deleteImage) {
      let nomeImagem = image.nomeArquivo;
      fs.unlinkSync("./imagens/" + nomeImagem);
    }

    res.status(200).send("imagem deletada");
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  createOneImagem,
  deleteOneImagem,
};
