require("dotenv").config();

const Produto = require("../models").produto;
const Imagem = require("../models").imagem;

const path = require("path");

const createProduto = async (req, res) => {
  try {
    const files = req.files;
    
    files.forEach(file => {
      const extensao = path.extname(file.originalname)
      const extensoesValidas = ['.jpg', '.png', '.webp']
      if(!extensoesValidas.includes(extensao)){
        
      }
      let nomeArquivo = file.filename
      const imagem = Imagem.create({nomeArquivo: nomeArquivo}); // Insert imagem no banco de dados
      
    })


    
    
    let id = req.body.id
    let info = {
      nome: req.body.nome,
    };
    const produto = await Produto.create(info);
    res.json({files, msg: "Enviada com sucesso vamo q vamo" });
    
    
    

  } catch (error) {
    res.status(500).json({msg:"caiu no catch"});
  }
};

const getAllProduto = async (req, res) => {
  let produtos = await Produto.findAll();
  res.status(200).send(produtos);
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
