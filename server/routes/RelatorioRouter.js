const express = require('express')
const router = express.Router()

const controller = require("../controllers/RelatorioController")


//* Create produto
router.post('/',controller.createRelatorio)

//* exibir todos os Relatorios
router.get('/', controller.getAllRelatorio)

//* Read
router.get('/:id', controller.getOneRelatorio)

//* update
router.put('/:id',controller.updateRelatorio)

//* delete
router.delete('/:id', controller.deleteRelatorio)

module.exports = router