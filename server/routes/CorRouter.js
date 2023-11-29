const express = require('express')
const router = express.Router()

const controller = require("../controllers/CorController")


//* Create Cor
router.post('/',controller.createCor)

//* exibir todos as variações de produto
router.get('/', controller.getAllCor)

//* Read
router.get('/:id', controller.getOneCor)

//* update
router.put('/:id',controller.updateCor)

//* delete
router.delete('/:id', controller.deleteCor)

module.exports = router