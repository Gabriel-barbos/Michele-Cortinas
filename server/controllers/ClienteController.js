const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { cliente } = require("../models");
const { exit } = require("process");

require("dotenv").config();

const Cliente = require("../models").cliente;
const Endereco = require("../models").endereco;
const Telefone = require("../models").telefone;

const login = async (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;

  if (!email) {
    res.status(422).json({ msg: "O email é obrigatório" });
  }

  if (!senha || senha.length < 5) {
    res.status(422).json({ msg: "senha inválida" });
  }

  const cliente = await Cliente.findOne({ where: { email: email } });
  if (!cliente) {
    return res.status(500).json({ msg: "Cliente não encontrado" });
  }

  const checkSenha = await bcrypt.compare(senha, cliente.senha);
  if (!checkSenha) {
    return res.status(422).json({ msg: "Senha incorreta" });
  }

  try {
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(
      {
        id: cliente.id,
      },
      secret
    );

    return res.status(200).json({ msg: "Autenticação efetuada com sucesso", token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Ocorreu um erro na autenticação" });
  }
}

// Create
const register = async (req, res) => {
  let info = {
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    email: req.body.email,
    senha: await bcrypt.hash(req.body.senha, 10),
  };


  const emailIsRegistered = await Cliente.findOne({
    where: { email: info.email },
  });
  if (emailIsRegistered) {
    return res.status(422).json({ msg: "E-mail já cadastrado" });
  }

  const insertCliente = await Cliente.create(info)
  //* Adicionar endereco e telefone do cliente
  if(insertCliente){

    let numero = req.body.numero
    let endereco = {
      rua: req.body.nome,
      cep: req.body.cep,
      cidade: req.body.cidade,
      bairro: req.body.bairro,
      complemento: req.body.complemento
    }

    //* Caso o insert de cliente dê certo, realiza o insert de endereço e telefone

    const clienteRecente = await Cliente.findOne({
      attributes: ["id"],
      order: [["createdAt", "DESC"]],
    });
    let clienteId = clienteRecente.id
    const insertTelefone = await Telefone.create({
      numero: req.body.telefone,
      clienteId: clienteId
    });
    res.status(200).json({ msg: "Cliente cadastrado com sucesso!"});
  }else{
    return res.status(500).json({ msg: "Erro ao cadastrar Usuário"})
  }
  

  
};

// Pegar todos os clientes

const getAllCliente = async (req, res) => {
  let clientes = await Cliente.findAll();
  res.status(200).send(clientes);
};

// Pegar um cliente
const getOneCliente = async (req, res) => {
  try {
    let id = req.params.id;
    let cliente = await Cliente.findOne({ where: { id: id } });
    res.status(200).send(cliente);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Update Cliente
const updateCliente = async (req, res) => {
  try {
    let id = req.params.id;

    const cliente = await Cliente.update(req.body, { where: { id: id } });
    res.status(200).send(cliente);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// delete cliente por id
const deleteCliente = async (req, res) => {
  try {
    let id = req.params.id;
    await Cliente.destroy({ where: { id: id } });
    res.status(200).send("produtos deletados");
  } catch (error) {
    res.status(400).json({error});
  }
};

module.exports = {
  login,
  register,
  getAllCliente,
  getOneCliente,
  updateCliente,
  deleteCliente,
};
