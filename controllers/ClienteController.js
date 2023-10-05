function login(req, res) {
    res.send("Login funcionando")
}

const teste = require('../models')

const Cliente =  modelCliente.cliente


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
    createCliente,
    getAllCliente,
    getOneCliente,
    updateCliente,
    deleteCliente,
}

module.exports = { login }