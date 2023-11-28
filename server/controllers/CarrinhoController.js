const { Session } = require("inspector");


require("dotenv").config();

const Carrinho = require("../models").carrinho;
const Pedido = require("../models").pedido;


// Create
const addPedido = async (req, res) => {
  try {
    



    res.status(200).json({msg: "Adicionado ao carrinho!"})
  } catch (error) {
    res.status(500).json({msg: "caiu no catch"})
  }
};

const removePedido = async (req, res) => {
  try {




    res.status(200).json({msg: "Removido do carrinho!"})
  } catch (error) {
    res.status(500).json({msg: "caiu no catch"})
  }
};

const calculaTotal = async(req,res) =>{
  try {


    res.status(200).json({msg: "Adicionado ao carrinho!"})
  } catch (error) {
    res.status(500).json({msg: "caiu no catch"})
  }
}

const showPedidos = async (req, res) =>{
  try {

    const pedidos = await Carrinho.findOne({
      include:{
        model: Pedido,
      }
    })


    res.status(200).json({msg: "Adicionado ao carrinho!"})
  } catch (error) {
    res.status(500).json({msg: "caiu no catch"})
  }
}

module.exports = {
  showPedidos,
  calculaTotal,
  addPedido,
  removePedido
};
