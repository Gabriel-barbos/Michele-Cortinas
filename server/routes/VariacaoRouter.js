const express = require('express')
const router = express.Router()

const controller = require("../controllers/VariacaoController")

const upload = require("../config/multerConfig")

//* Create variacao
router.post('/', upload.array("file"),controller.createVariacao)

//* exibir todos as variações de produto
router.get('/', controller.getAllVariacao)

//* Read
router.get('/:id', controller.getOneVariacao)

//* update
router.put('/:id',controller.updateVariacao)

//* delete
router.delete('/:id', controller.deleteVariacao)

module.exports = router