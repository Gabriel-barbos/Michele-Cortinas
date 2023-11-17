require("dotenv").config();

const Variacao = require("../models/Variacao");
const Imagem = require("../models").imagem;

const path = require("path");
const fs = require("fs");

const createVariacao = async (req, res) => {
  try {
    const files = req.files;
    let extensaoValida = true;

    // valida extensão
    files.forEach((file) => {
      const extensao = path.extname(file.originalname);
      const extensoesValidas = [".jpg", ".png", ".webp"];
      if (!extensoesValidas.includes(extensao)) {
        console.log("ta caindo no extensoes valida");
        extensaoValida = false;
      }

      //Se alguma das imagens tiver extensão inválida remove do repositório
      if (!extensaoValida) {
        
      }
    });

    if (extensaoValida) {
      console.log("ta caindo aqui");
      let info = {
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao,
        categoria: req.body.categoria,
      };
      const variacao = await Variacao.create(info); // Insert produto

      //Pegar produto recém adicionado
      const variacaoRecente = await Variacao.findOne({
        attributes: ["id"],
        order: [["createdAt", "DESC"]],
      });
      const id = variacaoRecente.id;

      files.forEach((file) => {
        let nomeArquivo = file.filename;

        const imagem = Imagem.create({
          nomeArquivo: nomeArquivo,
          variacaoId: id,
        }); // Insert imagem no banco de dados
      });

      res.json({ msg: "Enviada com sucesso vamo q vamo" });
    } else {
      let nomeImagem = file.filename;
      fs.unlinkSync("./imagens/" + nomeImagem);
      res.status(500).json({ msg: "Extensão invalida" });
    }
  } catch (error) {
    const files = req.files;

    files.forEach((file) => {
      let nomeImagem = file.filename;
      fs.unlinkSync("./imagens/" + nomeImagem);
    });

    res.status(500).json({ error, msg: "caiu no catch" });
    fs.unlinkSync("./imagens/" + nomeImagem);
  }
};


const getAllVariacao = async (req, res) => {
  try {
    let variacoes = await Variacao.findAll({
      include: {
        model: Imagem,
        order: [["isCapa", "DESC"]],
      },
    });
    res.status(200).send(variacoes);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Pegar um variacao
const getOneVariacao = async (req, res) => {
  try {
    let id = req.params.id;
    let variacao = await Variacao.findOne({
      include: {
        model: Imagem,
        order: [["isCapa", "ASC"]],
      },
      where: { id: id },
    });
    res.status(200).json(variacao);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Update variacao
const updateVariacao = async (req, res) => {
  try {
    let id = req.params.id;

    const variacao = await Variacao.update(req.body, { where: { id: id } });
    res.status(200).send(variacao);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// delete variacao por id
const deleteVariacao = async (req, res) => {
  try {
    let id = req.params.id;
    const images = await Imagem.findAll({ where: { variacaoId: id } });
    const deleteVariacao = await Variacao.destroy({ where: { id: id } });

    if (deleteVariacao) {
      images.forEach((image) => {
        let nomeImagem = image.nomeArquivo;
        fs.unlinkSync("./imagens/" + nomeImagem);
      });
    }

    res.status(200).send("Produtos deletados");
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  createVariacao,
  getAllVariacao,
  getOneVariacao,
  updateVariacao,
  deleteVariacao,
};
