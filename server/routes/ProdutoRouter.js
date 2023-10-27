const express = require('express')
const router = express.Router()

const controller = require("../controllers/ProdutoController")

const upload = require("../config/multerConfig")

//* Create produto
router.post('/', upload.single("file"),  controller.createProduto)

//* exibir todos os produtos
router.get('/', controller.getAllProduto)

//* Read
router.get('/:id', controller.getOneProduto)

//* update
router.put('/:id',controller.updateProduto)

//* delete
router.delete('/:id', controller.deleteProduto)

module.exports = router