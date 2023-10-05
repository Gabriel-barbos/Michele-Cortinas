const express = require('express')
const router = express.Router()

const controller = require("../controllers/ClienteController")

router.get("/login", controller.login)

module.exports = router