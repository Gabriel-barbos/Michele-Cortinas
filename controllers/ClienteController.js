const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

require("dotenv").config();

const Cliente = require('../models').cliente

const login = async (req, res) => {
    const email = req.body.email
    const senha = req.body.senha

  if (!email) {
    res.status(422).json({ msg: "O email é obrigatório" });
  }

    if(!senha || senha.length < 5){
        res.status(422).json({msg: "senha inválida"})
    }

    const cliente = await Cliente.findOne({ where: { email: email } })
    if(!cliente) { res.status(500).json({msg: "Cliente não encontrado"}) }


    const checkSenha = await bcrypt.compare(senha, cliente.senha);
    if(!checkSenha) { res.status(422).json({msg: "Senha incorreta"}) }

    try {
        const secret = process.env.JWT_SECRET
        const token = jwt.sign({
            id: cliente.id
        }, secret)

        res.status(200).json({msg: "Autenticação efetuada com sucesso", token})
    } catch(err) {
        console.log(err)
        res.status(500).json({msg: "Ocorreu um erro na autenticação"})
    }

}

// Create
const register = async (req, res)=>{

    let info = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        senha: await bcrypt.hash(req.body.senha, 10),
    }

    const cliente = await Cliente.create(info)
    res.status(200).send(cliente)
}

// Pegar todos os clientes

const getAllCliente = async (req, res) => {
  let clientes = await Cliente.findAll();
  res.status(200).send(clientes);
};

// Pegar um cliente
const getOneCliente = async (req, res) => {
  let id = req.params.id;
  let cliente = await Cliente.findOne({ where: { id: id } });
  res.status(200).send(cliente);
};

// Update Cliente
const updateCliente = async (req, res) => {
  let id = req.params.id;

  const cliente = await Cliente.update(req.body, { where: { id: id } });
  res.status(200).send(cliente);
};

// delete cliente por id
const deleteCliente = async (req, res)=>{
    let id = req.params.id
    await Cliente.destroy({ where: { id: id}})
    res.status(200).send("produtos deletados")
}

module.exports ={
    login,
    register,
    getAllCliente,
    getOneCliente,
    updateCliente,
    deleteCliente,
}
