const express = require('express')
const router = express.Router()

const controller = require("../controllers/PedidoController")


//* Create Pedido
router.post('/',controller.createPedido)

router.get('/',controller.getAllPedido)

router.get('/:id',controller.getOnePedido)

//* update
router.put('/:id',controller.updatePedido)

//* delete
router.delete('/:id', controller.deletePedido)


module.exports = router