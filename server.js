const express = require("express")
const app = express()

const handlebars = require("express-handlebars").engine
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.use(express.static('public'));

require("dotenv").config();


// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// api
const clienteRoute = require("./routes/ClienteRouter")
app.use("/cliente", clienteRoute)

// client
const loginRoute = require('./routes/LoginRouter')
app.use("/entrar", loginRoute)

const registerRoute = require('./routes/RegisterRouter')
app.use("/cadastrar", registerRoute)

const dashboardRoute = require('./routes/DashboardRouter')
app.use("/dashboard", dashboardRoute)

app.listen(process.env.APP_PORT, () => {
    console.log(`🚀 Aplicação rodando: http://localhost:${process.env.APP_PORT}`)
})