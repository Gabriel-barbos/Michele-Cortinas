const express = require('express')
const router = express.Router()

const clienteController = require("../controllers/ClienteController")

router.post("/login", clienteController.login)


//* Create cliente
router.post('/register', clienteController.createCliente)

//* exibir todos os clientes
router.get('/allClientes',clienteController.getAllCliente)

//* Read
router.get('/:id:', clienteController.getOneCliente)

//* update
router.put('/:id',clienteController.updateCliente)

//* delete
router.get('/:id',clienteController.deleteCliente)

module.exports = router