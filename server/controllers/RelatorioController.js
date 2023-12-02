const { Op } = require("sequelize");
const Categoria = require("../models/Categoria");
const Pedido = require("../models/Pedido");
const Produto = require("../models/Produto");

require("dotenv").config();

const Relatorio = require("../models").relatorio;

// Create
const createRelatorio = async (req, res) => {
  try {
    const qtdPedidosRealizados = await Pedido.count();
    const qtdPedidosIncompletos = await Pedido.count({where:{status: "cancelado"}});
    const qtdPedidosFinalizados = await Pedido.count({where:{status: "finalizado"}});

    if(qtdPedidosRealizados == null){qtdPedidosRealizados=0}
    if(qtdPedidosIncompletos == null){qtdPedidosIncompletos=0}
    if(qtdPedidosFinalizados == null){qtdPedidosFinalizados=0}
    // //* Categoria mais vendida
    const countCategoria2 = await Produto.count({
      where: { categoriaId: 2 },
    });

    const countCategoria1 = await Produto.count({
      where: { categoriaId: 1 },
    });

    let categoriaMaisVend;
    if (countCategoria2 > countCategoria1) {
      categoriaMaisVend = 2;
    } else {
      categoriaMaisVend = 1;
    }
    
    const categoriaVendida = await Categoria.findOne({where:{id:categoriaMaisVend}})
    
    // //* Ticket médio
    let ticketMedio =0
    const soma = await Pedido.sum('valorTotal')
    if(soma != null){ticketMedio = soma / qtdPedidosFinalizados}

    let info = {
      maisVendCategoria: categoriaVendida.titulo,
      ticketMedio: ticketMedio,
      qtdPedidosRealizados: qtdPedidosRealizados,
      qtdPedidosIncompletos: qtdPedidosIncompletos,
      qtdPedidosFinalizados: qtdPedidosFinalizados,
    };

    const insertRelatorio = await Relatorio.create(info);
    res.status(200).json({ insertRelatorio });
  } catch (error) {
    res.status(500).json({ msg: "Erro ao adicionar relatorio"+error });
  }
};

// Pegar todos os clientes

const getAllRelatorio = async (req, res) => {
  let relatorio = await Relatorio.findAll();
  res.status(200).send(relatorio);
};

// Pegar um cliente
const getOneRelatorio = async (req, res) => {
  try {
    let id = req.params.id;
    let relatorio = await Relatorio.findOne({ where: { id: id } });
    res.status(200).send(relatorio);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Update Cliente
const updateRelatorio = async (req, res) => {
  try {
    let id = req.params.id;

    const relatorio = await Relatorio.update(req.body, { where: { id: id } });
    res.status(200).send(relatorio);
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
    res.status(400).json({ error });
  }
};

module.exports = {
  createRelatorio,
  getAllRelatorio,
  getOneRelatorio,
  updateRelatorio,
  deleteRelatorio,
};
