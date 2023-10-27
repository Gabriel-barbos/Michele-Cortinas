const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const Categoria = require("../models").categoria;


// Create
const createCategoria = async (req, res) => {
  let info = {
    nome: req.body.nome,
    slug: req.body.slug,
  };

  const categoria = await Categoria.create(info);
  res.status(200).send(categoria);
};

// Pegar todos os clientes

const getAllCategoria = async (req, res) => {
  let categoria = await Categoria.findAll();
  res.status(200).send(categoria);
};

// Pegar um cliente
const getOneCategoria = async (req, res) => {
  try {
    let id = req.params.id;
    let categoria = await Categoria.findOne({ where: { id: id } });
    res.status(200).send(categoria);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Update Cliente
const updateCategoria = async (req, res) => {
  try {
    let id = req.params.id;

    const categoria = await Categoria.update(req.body, { where: { id: id } });
    res.status(200).send(categoria);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// delete cliente por id
const deleteCategoria = async (req, res) => {
  try {
    let id = req.params.id;
    await Categoria.destroy({ where: { id: id } });
    res.status(200).send("categoria deletada");
  } catch (error) {
    res.status(400).json({error});
  }
};

module.exports = {
  createCategoria,
  getAllCategoria,
  getOneCategoria,
  updateCategoria,
  deleteCategoria,
};
