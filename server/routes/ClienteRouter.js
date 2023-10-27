const express = require('express')
const router = express.Router()

const controller = require("../controllers/ClienteController")
const { authentication } = require("../middlewares/AuthenticationMiddleWare")

router.post("/auth/login", controller.login)

//* Create cliente
router.post('/auth/register', controller.register)

//* exibir todos os clientes
router.get('/', controller.getAllCliente)

//* Read
router.get('/:id', authentication, controller.getOneCliente)

//* update
router.put('/:id', authentication, controller.updateCliente)

//* delete
router.delete('/:id',authentication,controller.deleteCliente)

module.exports = router