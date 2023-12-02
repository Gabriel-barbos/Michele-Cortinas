const express = require('express')
const router = express.Router()

const controller = require("../controllers/AdminController")


//* Create produto
router.post('/auth/register', controller.register)


router.post('/auth/login', controller.login)

//* update
router.put('/:id',controller.updateAdmin)


module.exports = router