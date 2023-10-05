const express = require('express')
const router = express.Router()

const controller = require("../controllers/ClienteController")

router.post("/login", controller.login)

module.exports = router