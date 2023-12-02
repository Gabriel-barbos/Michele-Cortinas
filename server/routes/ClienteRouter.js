const express = require('express')
const router = express.Router()

const controller = require("../controllers/ClienteController")
const { authentication } = require("../middlewares/AuthenticationMiddleWare")

router.post("/auth/login", controller.login)

//* Create cliente
router.post('/auth/register', controller.register)



//* exibir todos os clientes
router.get('/',controller.getAllCliente)

//* Read
router.get('/:id', authentication, controller.getOneCliente)

//* update
router.put('/:id', authentication ,controller.updateCliente)

//* delete
router.delete('/:id',authentication,controller.deleteCliente)


//* ========================== ROTAS ENDEREÇO =================
router.post('/endereco', controller.addEndereco)
router.put('/endereco/:id', controller.updateEndereco)
router.delete('/endereco/:id',controller.deleteEndereco)



//* ========================== ROTAS ENDEREÇO =================
router.post('/telefone', controller.addTelefone)
router.put('/telefone/:id', controller.updateTelefone)
router.delete('/telefone/:id',controller.deleteTelefone)

module.exports = router