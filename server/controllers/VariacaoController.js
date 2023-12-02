require("dotenv").config();

const Variacao = require("../models/Variacao");
const Imagem = require("../models").imagem;

const path = require("path");
const fs = require("fs");

const createVariacao = async (req, res) => {
  try {

      // let info = {
      //   titulo: req.body.titulo,
      //   cor: req.body.cor,
      //   produtoId: req.params.id
      // };

      const variacao = await Variacao.create({
        titulo: req.body.titulo,
        cor: req.body.cor,
        produtoId: req.body.id
      }); // Insert variação
      res.json({ msg: "Enviada com sucesso vamo q vamo" });
  
  } catch (error) {
    res.status(500).json({ error, msg: "caiu no catch" });
  }
};


const getAllVariacao = async (req, res) => {
  try {
    let variacoes = await Variacao.findAll();
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
      where: {id: id}
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
    const deleteVariacao = await Variacao.destroy({ where: { id: id } });

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