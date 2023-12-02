const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models").admin;
const { exit } = require("process");

require("dotenv").config();

const register = async (req, res) => {

  let info = {
    nome: req.body.nome,
    email: req.body.email,
    senha: await bcrypt.hash(req.body.senha, 10)
  };


  const emailIsRegistered = await Admin.findOne({
    where: { email: info.email },
  });
  if (emailIsRegistered) {
    return res.status(422).json({ msg: "E-mail já cadastrado" });
  }

  const insertAdmin = await Admin.create(info)
  //* Adicionar endereco e telefone do Admin
  if(insertAdmin){

    res.status(200).json({ msg: "Usuário cadastrado com sucesso!"});
  }else{
    return res.status(500).json({ msg: "Erro ao cadastrar Usuário"})
  }
  
};

const login = async (req, res) => {
  console.log(req.body)

    const email = req.body.email;
    const senha = req.body.senha;
  
    if (!email) {
      return res.status(422).json({ msg: "O email é obrigatório" });
    }
  
    if (!senha || senha.length < 5) {
      return res.status(422).json({ msg: "senha inválida" });
    }
  
    const admin = await Admin.findOne({where:{email:email}});
    if (!admin) {
      return res.status(500).json({ msg: "Usuário não encontrado" });
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
    register,
    updateAdmin,
    login
  }
