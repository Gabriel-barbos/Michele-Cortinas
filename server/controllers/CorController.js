require("dotenv").config();

const Cor = require("../models").cor;


// Create
const createCor = async (req, res) => {
  try {
    let info ={
        cor: req.body.cor,
        hex: req.body.hex
    }
    const insertCor = await Cor.create(info);
    res.status(200).json({msg: "Cor adicionada com sucesso!"});
  } catch (error) {
    res.status(500).json({msg: "Cor adicionada com sucesso!"});
  }
};

// Pegar todos os clientes

const getAllCor = async (req, res) => {
    try {
    
        const Cor = await Cor.create(info);
        res.status(200).json({msg: "Cor adicionada com sucesso!"});
    } catch (error) {
          res.status(500).json({msg: "Cor adicionada com sucesso!"});
    }
};

// Pegar um cliente
const getOneCor = async (req, res) => {
    try {
    
        const Cor = await Cor.create(info);
        res.status(200).json({msg: "Cor adicionada com sucesso!"});
    } catch (error) {
          res.status(500).json({msg: "Cor adicionada com sucesso!"});
    }
};

// Update Cliente
const updateCor = async (req, res) => {
    try {
    
        const Cor = await Cor.create(info);
        res.status(200).json({msg: "Cor adicionada com sucesso!"});
    } catch (error) {
          res.status(500).json({msg: "Cor adicionada com sucesso!"});
    }
};

// delete cliente por id
const deleteCor = async (req, res) => {
    try {
    
        const Cor = await Cor.create(info);
        res.status(200).json({msg: "Cor adicionada com sucesso!"});
    } catch (error) {
          res.status(500).json({msg: "Cor adicionada com sucesso!"});
    }
};

module.exports = {
  createCor,
  getAllCor,
  getOneCor,
  updateCor,
  deleteCor,
};
