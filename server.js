const express = require("express")
const app = express()

require("dotenv").config();


// middleware

app.use(express.json)

app.use(express.urlencoded({extended: true}))


//routers
const clienteRoute = require("./routes/ClienteRouter")

app.use("/cliente", clienteRoute)



app.listen(process.env.APP_PORT, () => {
    console.log(`🚀 Aplicação rodando: http://localhost:${process.env.APP_PORT}`)
})