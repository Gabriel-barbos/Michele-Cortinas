const express = require('express')
const router = express.Router()

const controller = require("../controllers/ClienteController")

router.post("/login", controller.login)


//* Create cliente
router.post('/register', controller.createCliente)

//* exibir todos os clientes
router.get('/allClientes',controller.getAllCliente)

//* Read
router.get('/:id', controller.getOneCliente)

//* update
router.put('/:id',controller.updateCliente)

//* delete
router.delete('/:id',controller.deleteCliente)

module.exports = router