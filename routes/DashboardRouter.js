const express = require('express')
const router = express.Router()

const controller = require("../controllers/DashboardController")
const checkToken = require("../controllers/ClienteController").checkToken

router.get("/", checkToken, controller.dashboard)

module.exports = router