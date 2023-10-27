const express = require('express')
const router = express.Router()

const controller = require("../controllers/CategoriaController")


//* Create produto
router.post('/', controller.createCategoria)

//* exibir todos os produtos
router.get('/', controller.getAllCategoria)

//* Read
router.get('/:id', controller.getOneCategoria)

//* update
router.put('/:id',controller.updateCategoria)

//* delete
router.delete('/:id', controller.deleteCategoria)

module.exports = router