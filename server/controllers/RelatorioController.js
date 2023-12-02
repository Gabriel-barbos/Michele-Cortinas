const Pedido = require("../models/Pedido");

require("dotenv").config();

const Relatorio = require("../models").relatorio;


// Create
const createRelatorio = async (req, res) => {

  try {

    req.body



    
    let info = {
        titulo: req.body.titulo,
      };
    
      const insertRelatorio = await Categoria.create(info);
      res.status(200).json({categoria});
  } catch (error) {
    const qtdPedidosRealizados = await Pedido.count();
    return console.log(qtdPedidosRealizados)
      res.status(500).json({msg: "Erro ao adicionar relatorio"});
  }
};

// Pegar todos os clientes

const getAllRelatorio = async (req, res) => {
  let categoria = await Relatorio.findAll();
  res.status(200).send(categoria);
};

// Pegar um cliente
const getOneRelatorio = async (req, res) => {
  try {
    let id = req.params.id;
    let categoria = await Relatorio.findOne({ where: { id: id } });
    res.status(200).send(categoria);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Update Cliente
const updateRelatorio = async (req, res) => {
  try {
    let id = req.params.id;

    const categoria = await Relatorio.update(req.body, { where: { id: id } });
    res.status(200).send(categoria);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// delete cliente por id
const deleteRelatorio = async (req, res) => {
  try {
    let id = req.params.id;
    await Relatorio.destroy({ where: { id: id } });
    res.status(200).send("Relatorio deletado");
  } catch (error) {
    res.status(400).json({error});
  }
};

module.exports = {
  createRelatorio,
  getAllRelatorio,
  getOneRelatorio,
  updateRelatorio,
  deleteRelatorio,
};
