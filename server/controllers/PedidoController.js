require("dotenv").config();

const Pedido = require("../models").pedido;

const addPedido = async (req,res) =>{
    try {
        


    } catch (error) {
       res.status(500).json({msg: "Erro ao adicionar pedido"}) 
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

module.exports = {
    addPedido,
    deletePedido,
};
