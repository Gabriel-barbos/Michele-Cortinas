const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models").admin;
const { exit } = require("process");

require("dotenv").config();

const Admin = require("../models").admin;
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

const login = async (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;
  
    if (!email) {
      res.status(422).json({ msg: "O email é obrigatório" });
    }
  
    if (!senha || senha.length < 5) {
      res.status(422).json({ msg: "senha inválida" });
    }
  
    const admin = await Admin.findOne({ where: { email: email } });
    if (!admin) {
      return res.status(500).json({ msg: "Cliente não encontrado" });
    }
  
    const checkSenha = await bcrypt.compare(senha, admin.senha);
    if (!checkSenha) {
      return res.status(422).json({ msg: "Senha incorreta" });
    }
  
    try {
      const secret = process.env.JWT_SECRET;
      const token = jwt.sign(
        {
          id: admin.id,
        },
        secret
      );
  
      return res.status(200).json({ msg: "Autenticação efetuada com sucesso", token });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Ocorreu um erro na autenticação" });
    }
  }

  const updateAdmin = async (req, res) => {
    try {
      let id = req.params.id;
  
      const updateAdmin = await Admin.update(req.body, { where: { id: id } });
      res.status(200).send(updateAdmin);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  module.exports ={
    updateAdmin,
    login
  }
