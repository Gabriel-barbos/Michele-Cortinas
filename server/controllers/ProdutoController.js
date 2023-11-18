require("dotenv").config();

const Produto = require("../models").produto;
const Imagem = require("../models").imagem;

const path = require("path");
const fs = require("fs");

const createProduto = async (req, res) => {
  try {
    const files = req.files;
    
    let extensaoValida = true;
    // valida extensão
    files.forEach((file) => {
      const extensao = path.extname(file.originalname);

      const extensoesValidas = [".jpg", ".png", ".webp"];
      if (!extensoesValidas.includes(extensao)) {
        let nomeImagem = file.filename;
        fs.unlinkSync("./public/imagens/" + nomeImagem);
        extensaoValida = false;
      }
    });

    if(!extensaoValida) return res.status(500).json({ msg: "Uma imagem selecionada com extensão inválida" });

    let info = {
      nome: req.body.nome,
      preco: req.body.preco,
      descricao: req.body.descricao,
      categoria: req.body.categoria
    };
    const produto = await Produto.create(info); // Insert produto

    //Pegar produto recém adicionado
    const produtoRecente = await Produto.findOne({
      attributes: ["id"],
      order: [["createdAt", "DESC"]],
    });
    
    const id = produtoRecente.id;

    // cadastra no banco de dados
    for(let file of files) {
      let nomeArquivo = file.filename;
      await Imagem.create({
        nomeArquivo: nomeArquivo,
        produtoId: id,
      })
    };
  } 
  catch (error) {
    console.log(error)
  }
};


const getAllProduto = async (req, res) => {
  try {
    let produtos = await Produto.findAll({
      include: {
        model: Imagem,
        order: [["isCapa", "DESC"]],
      },
    });
    res.status(200).send(produtos);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Pegar um produto
const getOneProduto = async (req, res) => {
  try {
    let id = req.params.id;
    let produto = await Produto.findOne({
      include: {
        model: Imagem,
        order: [["isCapa", "ASC"]],
      },
      where: { id: id },
    });
    res.status(200).json(produto);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Update produto
const updateProduto = async (req, res) => {
  try {
    let id = req.params.id;

    const produto = await Produto.update(req.body, { where: { id: id } });
    res.status(200).send(produto);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// delete produto por id
const deleteProduto = async (req, res) => {
  try {
    let id = req.params.id;
    const images = await Imagem.findAll({ where: { produtoId: id } });
    const deleteProduto = await Produto.destroy({ where: { id: id } });

    if (deleteProduto) {
      images.forEach((image) => {
        let nomeImagem = image.nomeArquivo;
        fs.unlinkSync("./public/imagens/" + nomeImagem);
      });
    }

    res.status(200).send("produtos deletados");
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  createProduto,
  getAllProduto,
  getOneProduto,
  updateProduto,
  deleteProduto,
};
