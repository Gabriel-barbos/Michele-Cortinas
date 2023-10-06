const express = require('express')
const router = express.Router()

const controller = require("../controllers/ClienteController")

router.post("/auth/login", controller.login)

//* Create cliente
router.post('/auth/register', controller.register)

//* exibir todos os clientes
router.get('/',controller.getAllCliente)

//* Read
router.get('/:id',controller.checkToken, controller.getOneCliente)

//* update
router.put('/:id',controller.checkToken,controller.updateCliente)

//* delete
router.delete('/:id',controller.checkToken,controller.deleteCliente)

module.exports = router