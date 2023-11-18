const express = require('express')
const router = express.Router()

const controller = require("../controllers/ImagemController")

const upload = require("../config/multerConfig")

//* Create produto
router.post('/', upload.single("file"),controller.createOneImagem)

//* delete
router.delete('/:id', controller.deleteOneImagem)

module.exports = router