const Cliente = require('../models').cliente

const login = async (req, res) => {
    const email = req.body.email
    const password = req.body.senha

    if(!email){
        res.status(422).json({msg: "O email é obrigatório"})
    }

    if(!password || password.length < 5){
        res.status(422).json({msg: "Senha inválida"})
    }

    const cliente = await Cliente.findOne({ where: { email: email } })
    if(cliente){
        res.status(200).json({msg: "Existe um cliente"})
    } else {
        res.status(500).json({msg: "Não encontrado"})
    }

}

// Create
const createCliente = async(req,res)=>{

    let info = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        senha: req.body.senha,
    }

    const cliente = await Cliente.create(info)
    res.status(200).send(cliente)


}

// Pegar todos os clientes

const getAllCliente = async(req,res)=>{
    let clientes = await Cliente.findAll({})
    res.status(200).send(clientes)
}


// Pegar um cliente
const getOneCliente = async(req,res)=>{
    let id = req.param.id
    let clientes = await Cliente.findOne({where: {id: id}})
    res.status(200).send(clientes)
}


// Update Cliente

const updateCliente = async (req,res) => {
    let id = req.params.id

    const cliente = await Cliente.update(req.body,{where: {id:id}})
    res.status(200).send(cliente)

}


// delete cliente por id
const deleteCliente = async(req,res)=>{
    let id = req.param.id
    await Cliente.destroy({ where: { id: id}})
    res.status(200).send("produtos deletados")
}

module.exports ={
    login,
    createCliente,
    getAllCliente,
    getOneCliente,
    updateCliente,
    deleteCliente,
}
