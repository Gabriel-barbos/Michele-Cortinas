import { Link, Button } from "@mui/material"
import JourneyHeader from "../../components/shop/JourneyHeader"
import { useState, useEffect } from "react"
import axios from "axios"
import { ProdutoPedidoCard } from "../../components/shop/ProdutoPedidoCard"

const Pedido = () => {

    const [produtosInStorage, setProdutosInStorage] = useState(JSON.parse(localStorage.getItem("cart")).products)

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        let promises = []

        for(let produto of produtosInStorage){
            promises.push(axios.get("http://localhost:8081/produto/" + produto.id))
        }

        Promise.all(promises).then((produtosFromBD) => {
            produtosFromBD = produtosFromBD.map((v, i) => ({...v.data, largura: produtosInStorage[i].largura, altura: produtosInStorage[i].altura, variacao: produtosInStorage[i].variacao}))
            setProdutos(produtosFromBD)
           
        }).then(() => {
            console.log(produtos)
        })
    }, [produtosInStorage])


    return(
        <div className="">
            <JourneyHeader noCart={true} />
            <main className="pedido-container">
                <Link href="/">
                    <Button
                        color="inherit"
                        variant="outlined"
                        sx={{ mb: 2 }}
                    >
                        Continuar comprando
                    </Button>
                </Link>
                <h1>Pedidos</h1>
                <div className="pedido-container-produtos">
                    {produtos.map((produto) => {
                        return <ProdutoPedidoCard produto={produto} />
                    })}
                </div>
            </main>
        </div>
    )
}

export default Pedido