require("dotenv").config();

const Produto = require("../models").produto;
const Categoria = require("../models").categoria;
const Imagem = require("../models").imagem;
const Variacao = require("../models").variacao;
const {Op} = require("sequelize");

const path = require("path");
const fs = require("fs");

const createProduto = async (req, res) => {
  try {
    const files = req.files;

    let extensaoValida = true;
    // valida extensão
    files.forEach((file) => {
      const extensao = path.extname(file.originalname);

      const extensoesValidas = [".jpg", ".png", ".webp", ".jpeg"];
      if (!extensoesValidas.includes(extensao)) {
        let nomeImagem = file.filename;
        fs.unlinkSync("./public/imagens/" + nomeImagem);
        extensaoValida = false;
      }
    });

    if (!extensaoValida) return res.status(500).json({
      msg: "Uma imagem selecionada com extensão inválida"
    });

    let info = {
      nome: req.body.nome,
      preco: req.body.preco,
      descricao: req.body.descricao,
      categoriaId: req.body.categoria
    };
    const produto = await Produto.create(info); // Insert produto

    //Pegar produto recém adicionado
    const produtoRecente = await Produto.findOne({
      attributes: ["id"],
      order: [
        ["createdAt", "DESC"]
      ],
    })

    const id = produtoRecente.id;

    if(produto){
      let variacoes = JSON.parse(req.body.variacoes).variacoes;
      
      for (let variacao of variacoes) {
        const insertVariacao = await Variacao.create({
          titulo: variacao.titulo,
          cor: variacao.cor != "" ? variacao.cor : "#000000",
          produtoId: id
        }) 
      }
    }
    
    // cadastra no banco de dados
    for (let file of files) {
      let nomeArquivo = file.filename;
      await Imagem.create({
        nomeArquivo: nomeArquivo,
        produtoId: id,
      })
    };
    

    return res.status(200).json({msg: "Produto cadastrado com sucesso"});
  } catch (error) {
    console.log(error)
  }
};

const getAllProduto = async (req, res) => {
  try {
    let produtos = await Produto.findAll({
      include: {
        model: Imagem,
        order: [
          ["isCapa", "DESC"]
        ],
      },
    });

    res.status(200).send(produtos);
  } catch (error) {
    res.status(400).json({
      error
    });
  }
};

// Pegar um produto
const getOneProduto = async (req, res) => {
  try {
    let id = req.params.id;
    let produto = await Produto.findOne({
      include: [{
        model: Imagem,
        order: [["isCapa", "ASC"]],
      },
      {
        model: Variacao,
      }
    ],
      where: {
        id: id
      },
    });


    res.status(200).json(produto);
  } catch (error) {
    res.status(400).json({
      error
    });
  }
};

// Update produto
const updateProduto = async (req, res) => {
  try {

    // TRATAMENTO DE IMAGENS
    const files = req.files;
    console.log(files)

    let extensaoValida = true;
    // valida extensão da imagem
    files.forEach((file) => {
      const extensao = path.extname(file.originalname);
      const extensoesValidas = [".jpg", ".png", ".webp", ".jpeg"];
      if (!extensoesValidas.includes(extensao)) {
        let nomeImagem = file.filename;
        fs.unlinkSync("./public/imagens/" + nomeImagem);
        extensaoValida = false;
      }
    });

    if (!extensaoValida) return res.status(500).json({
      msg: "Uma imagem selecionada com extensão inválida"
    });
    
    let id = req.params.id;
    const insertProduto = await Produto.update(req.body, {
      where: {
        id: id
      }
    });
    if (insertProduto) {
      // cadastra no banco de dados
      for (let file of files) {
        let nomeArquivo = file.filename;
        await Imagem.create({
          nomeArquivo: nomeArquivo,
          produtoId: id,
        })
      };
    }
    res.status(200).json({
      msg: "Produto atualizado com sucesso" + req.body.nome
    });
  } catch (error) {
    res.status(400).json({
      msg: "Caiu no catch"
    });
  }
};

// delete produto por id
const deleteProduto = async (req, res) => {
  try {
    let id = req.params.id;
    const images = await Imagem.findAll({
      where: {
        produtoId: id
      }
    });
    const deleteProduto = await Produto.destroy({
      where: {
        id: id
      }
    });

    if (deleteProduto) {
      images.forEach((image) => {
        let nomeImagem = image.nomeArquivo;
        fs.unlinkSync("./public/imagens/" + nomeImagem);
      });
    }

    res.status(200).json({
      msg: "Produto deletado com sucesso!"
    });
  } catch (error) {
    res.status(400).json({
      error
    });
  }
};

const deleteOneImagem = async (req, res) => {
  try {
    let id = req.params.id;
    const image = await Imagem.findOne({
      where: {
        id: id
      }
    });
    const deleteImage = await Imagem.destroy({
      where: {
        id: id
      }
    });

    if (deleteImage) {
      let nomeImagem = image.nomeArquivo;
      fs.unlinkSync("./public/imagens/" + nomeImagem);
    }

    res.status(200).send("imagem deletada");
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};


//* Procurar um produto
const searchProduto = async (req, res) => {
  try {
    let pesquisa = req.query.q;

    let categoria = await Categoria.findOne({
      where: {
        titulo: {
          [Op.like]: '%' + pesquisa + '%'
        }
      }
    })


    let produtos = await Produto.findAll({
      where: {    
            categoriaId: categoria.id

      },
      include: {
        model: Imagem,
        order: [
          ["isCapa", "ASC"]
        ],
      },
    })

    res.status(200).json({
      produtos
    })
  } catch (error) {
    res.status(500).json({
      msg: "Caiu no catch" + error
    })
  }
}


module.exports = {
  createProduto,
  getAllProduto,
  getOneProduto,
  updateProduto,
  deleteProduto,
  deleteOneImagem,
  searchProduto
};