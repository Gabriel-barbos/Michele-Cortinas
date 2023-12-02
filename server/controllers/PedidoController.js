require("dotenv").config();

const Pedido = require("../models").pedido;

const createPedido = async (req,res) =>{
    try {
      
        const insertPedido = await Pedido.create({
          largura: req.body.largura,
          altura: req.body.altura,
          clienteId: req.body.clienteId,
          produtoId: req.body.produtoId
         })

        res.status(200).json({insertPedido})
    } catch (error) {
       res.status(500).json({msg: "Erro ao adicionar pedido"}) 
    }
}


const updatePedido = async (req,res) =>{
  try {
    res.status(200).json({msg:"Atualizado com sucesso!"});
  } catch (error) {
    res.status(400).json({error});
  }
}

// delete cliente por id
const deletePedido = async (req, res) => {
  try {
    res.status(200).json({msg:"Deletado com sucesso!"});
  } catch (error) {
    res.status(400).json({error});
  }
};

const atualizarStatus = async (req,res) =>{
  try {
    let status = req.body.status
    const updateStatus = await Pedido.update({
      status: status
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
    atualizarStatus
};
