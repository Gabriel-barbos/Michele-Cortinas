const express = require("express")
const app = express()

require("dotenv").config();


// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const cors = require("cors");
app.use(cors());

//routers
const clienteRoute = require("./routes/ClienteRouter")
const authorization = require("./routes/AuthRouter")

app.use("/cliente", clienteRoute)
app.use("/authorization", authorization)

app.listen(process.env.APP_PORT, () => {
    console.log(`🚀 Aplicação rodando: http://localhost:${process.env.APP_PORT}`)
})