const { cliente, produto, variacao } = require("../models");
const Variacao = require("../models/Variacao");

require("dotenv").config();

const Pedido = require("../models").pedido;

const createPedido = async (req,res) =>{
    try {
      
        const insertPedido = await Pedido.create({
          largura: req.body.largura,
          altura: req.body.altura,
          valorTotal: req.body.valorTotal,
          clienteId: req.body.clienteId,
          produtoId: req.body.produtoId,
          variacaoId: req.body.variacaoId,
          status: 0
         })

        res.status(200).json({insertPedido})
    } catch (error) {
       res.status(500).json({msg: "Erro ao adicionar pedido: " + error}) 
    }
}



const getAllPedido = async (req, res) =>{
  try {

    const allPedido = await Pedido.findAll({
      include:[{
        model: cliente
      },
      {
        model: produto
      },
      {
        model:variacao
      }
    ]
    })

    res.status(200).json({allPedido});
  } catch (error) {
    res.status(500).json({msg: "Ocorreu um erro"});
  }
}

const getOnePedido = async (req,res) =>{
  try {
    let id = req.params.id
    const onePedido = await Pedido.findOne({
      where:{
        id:id
      },
      include:[{
        model: cliente
      },
      {
        model: produto
      },
      {
        model: variacao
      }]
    })
    res.status(200).json({onePedido})
  } catch (error) {
    res.status(500).json({msg: "Erro"+ error})
  }
}


const updatePedido = async (req,res) =>{
  try {
    let id = req.params.id
    const updatePedido = await Pedido.update(req.body,{where:{id:id}})
    res.status(200).json({msg:"Atualizado com sucesso!"});
  } catch (error) {
    res.status(400).json({error});
  }
}

// delete cliente por id
const deletePedido = async (req, res) => {
  try {
    let id = req.params.id
    const deletePedido = Pedido.destroy({where:{id:id}})
    res.status(200).json({msg:"Deletado com sucesso!"});
  } catch (error) {
    res.status(400).json({error});
  }
};

const atualizarStatus = async (req,res) =>{
  try {
    let id = req.body.id
    let status = req.body.status
    const updateStatus = await Pedido.update({
      status: status, where:{id:id}
    })

    res.status(200).json({msg:"Status atualizado para: "+ status});
  } catch (error) {
    res.status(400).json({msg: "Erro ao atualizar status"});
  }
}

module.exports = {
    createPedido,
    updatePedido,
    deletePedido,
    getAllPedido,
    getOnePedido,
    atualizarStatus
};
