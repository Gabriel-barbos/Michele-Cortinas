const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { cliente, endereco, variacao, produto } = require("../models");
const { exit } = require("process");

require("dotenv").config();

const Cliente = require("../models").cliente;
const Endereco = require("../models").endereco;
const Telefone = require("../models").telefone;
const Pedido = require("../models").pedido;

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
    return res.status(500).json({ msg: "Usuário não encontrado" });
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
    senha: await bcrypt.hash(req.body.senha, 10)
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
    res.status(200).json({ msg: "Usuário cadastrado com sucesso!"});
  }else{
    return res.status(500).json({ msg: "Erro ao cadastrar usuário"})
  }
  

  
};

// Pegar todos os clientes

const getAllCliente = async (req, res) => {
  try {
    let id = req.params.id;
    let clienteEnderecoTel = await Cliente.findAll({
      include:[
        {
        model: Endereco,
        },{
          model: Telefone,
        }]
      });
      //* retorna tudooo
      if(clienteEnderecoTel!= null) return res.status(200).send(clienteEnderecoTel);
      
      
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Pegar um cliente
const getOneCliente = async (req, res) => {
  try {
    let id = req.params.id;
    let clienteEnderecoTel = await Cliente.findOne({where:
       { id: id },
      include:[
        {
        model: Endereco,
        where:{clienteId: id}
        },{
          model: Telefone,
          where:{clienteId: id}
        }]
      });
      //* retorna tudooo
      if(clienteEnderecoTel!= null) return res.status(200).send(clienteEnderecoTel);
      
      //* RETORNA APENAS O CLIENTE E SEU ENDEREÇO CASO NÃO HAJA TELEFONE
      if(clienteEnderecoTel == null || !clienteEnderecoTel){
        
        let clienteEndereco = await Cliente.findOne({where: {id:id},
        include:{
          model: Endereco,
          where: {clienteId: id}
        }
      })
      //* RETORNA SOMENTE O CLIENTE E TELEFONE
        if(clienteEndereco == null || !clienteEndereco){
            let clienteTelefone = await Cliente.findOne({where: {id:id},
              include:{
                model: Telefone,
                where: {clienteId: id}
              }
            })

              //* RETORNA SOMENTE O CLIENTE
              if(clienteTelefone == null || !clienteTelefone){
                const clienteSolo = await Cliente.findOne({where:{
                  id:id
                }})
                return res.status(200).send(clienteSolo);
              }
          return res.status(200).send(clienteTelefone);
        }
        return res.status(200).json({clienteEndereco})
      }
      
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


//* ======================== ENDEREÇO ============================
const addEndereco = async (req,res) =>{
  try {
    const insertEndereco = Endereco.create({
      nome: req.body.nome,
      rua: req.body.rua,
      cep: req.body.cep,
      cidade: req.body.cidade,
      bairro: req.body.bairro,
      complemento: req.body.complemento,
      clienteId: req.body.clienteId
    });
    res.status(200).json({msg:"Endereço adicionado com sucesso!"});
  } catch (error) {
    res.status(500).json({msg:"Erro ao adicionar endereço"});
  }
}

const getOneEndereco = async (req, res) => {
  try {
    let id = req.params.id;
    let endereco = await Endereco.findOne({ where: { id: id } });
    res.status(200).send(endereco);
  } catch (error) {
    res.status(400).json({ error });
  }
}

const updateEndereco = async (req,res) =>{
  try {
    let id = req.params.id;
    const updateEndereco = await Endereco.update(req.body, { where: { id: id } });
    res.status(200).json({msg:"Endereço atualizado com sucesso!"});
  } catch (error) {
    console.log(error)
    res.status(500).json({msg:"Erro ao atualizar endereço"});
  }
}

const deleteEndereco = async (req,res) =>{
  try {
    let id = req.params.id;
    const insertEndereco = Endereco.destroy({
      where:{
        id:id
      }
    });
    res.status(200).json({msg:"Endereço excluido com sucesso!"});
  } catch (error) {
    res.status(500).json({msg:"Erro ao excluir endereço"});
  }
}




//* ================================== TELEFONE ==================================
const addTelefone = async (req,res) =>{
  try {
    const insertTelefone = Telefone.create({
      numero: req.body.numero,
      clienteId: req.body.id
    });
    res.status(200).json({msg:"Telefone adicionado com sucesso!"});
  } catch (error) {
    res.status(500).json({msg:"Erro ao adicionar telefone"});
  }
}

const updateTelefone = async (req,res) =>{
  try {
    let id = req.params.id;
    const updateTelefone = await Telefone.update(req.body, { where: { id: id } });
    res.status(200).json({msg:"Telefone atualizado com sucesso!"});
  } catch (error) {
    console.log(error)
    res.status(500).json({msg:"Erro ao atualizar telefone"});
  }
}

const deleteTelefone = async (req,res) =>{
  try {
    let id = req.params.id;
    const deleteTelefone = Telefone.destroy({
      where:{
        id:id
      }
    });
    res.status(200).json({msg:"Telefone excluido com sucesso!"});
  } catch (error) {
    res.status(500).json({msg:"Erro ao excluir telefone"});
  }
}

const getAllPedidosFromUser = async(req, res) => {
  try {
    let allPedidos = await Pedido.findAll({
      where: {
        clienteId: req.params.id
      }, include:[{
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

    res.status(200).json({allPedidos});
  } catch (error) {
    res.status(500).json({msg: "Ocorreu um erro: " + error});
  }
}

module.exports = {
  login,
  register,
  getAllCliente,
  getOneCliente,
  updateCliente,
  deleteCliente,
  addEndereco,
  updateEndereco,
  deleteEndereco,
  getOneEndereco,
  addTelefone,
  updateTelefone,
  deleteTelefone,
  getAllPedidosFromUser
};
