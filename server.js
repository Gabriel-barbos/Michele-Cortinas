const express = require("express")
const app = express()

require("dotenv").config();

const clienteRoute = require("./routes/ClienteRouter")

app.use("/cliente", clienteRoute)

app.listen(process.env.APP_PORT, () => {
    console.log(`🚀 Aplicação rodando: http://localhost:${process.env.APP_PORT}`)
})