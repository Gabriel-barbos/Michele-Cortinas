require("dotenv").config();

const Produto = require("../models").produto;
const Imagem = require("../models").imagem;

const path = require("path");

const createProduto = async (req, res) => {
  try {
    const files = req.files;

    let info = {
      nome: req.body.nome,
      preco: req.body.preco,
      descricao: req.body.descricao,
      categoria: req.body.categoria
    };
    const produto = await Produto.create(info); // Insert produto

    const produtoRecente = await Produto.findOne({
      attributes: ["id"],
      order: [["createdAt", "DESC"]],
    }); //Pegar produto recém adicionado
    const id = produtoRecente.id;

    const extensoesValidas = [".jpg", ".png", ".webp", ".jpeg"];
    let someImageLoaded = false; 

    files.forEach((file) => {
      const extensao = path.extname(file.originalname);
      console.log(extensao)
      // if (extensoesValidas.includes(extensao)) {
        let nomeArquivo = file.filename;
        const imagem = Imagem.create({ nomeArquivo: nomeArquivo, produtoId: id }); // Insert imagem no banco de dados
        someImageLoaded = true;
      // }
    });

    if(!someImageLoaded) return res.status(500).json({msg: "Uma imagem com formato inválido"});

    res.json({ msg: files});
  } catch (error) {
    res.status(500).json({ msg: "caiu no catch" });
  }
};

const getAllProduto = async (req, res) => {
  try {
    
    let produtos = await Produto.findAll();
    res.status(200).send(produtos);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Pegar um produto
const getOneProduto = async (req, res) => {
  try {
    let id = req.params.id;
    let produto = await Produto.findOne({ where: { id: id } });
    res.status(200).send(produto);
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
    await Produto.destroy({ where: { id: id } });
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
