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
const produtoRoute = require("./routes/ProdutoRouter")
const categoriaRoute = require("./routes/CategoriaRouter")
const imagemRoute = require("./routes/ImagemRouter")
const variacaoRoute = require("./routes/VariacaoRouter")

app.use("/cliente", clienteRoute)
app.use("/produto", produtoRoute)
app.use("/categoria", categoriaRoute)
app.use("/imagem", imagemRoute)
app.use("/variacao", variacaoRoute)

app.listen(process.env.APP_PORT, () => {
    console.log(`🚀 Aplicação rodando: http://localhost:${process.env.APP_PORT}`)
})