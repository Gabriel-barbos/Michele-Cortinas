const express = require('express')
const router = express.Router()

const controller = require("../controllers/CarrinhoController")


//* Create produto
router.post('/', controller.addPedido)

//* exibir todos os produtos
router.get('/', controller.showPedidos)

//* remover pedido
router.delete('/:id', controller.showPedidos)


module.exports = router