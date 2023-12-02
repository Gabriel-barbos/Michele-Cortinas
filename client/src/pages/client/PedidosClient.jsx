
import axios from "axios"
import { PedidoClientCard } from "../../components/client/PedidoClientCard"
import styled from "styled-components"
import { useEffect, useState } from "react"

export default function PedidosClient(){
    const [pedidos, setPedidos] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/pedido").then(({data}) => {
            setPedidos(data)
            console.log(data)
        })

    }, [])
    return (
            <>
                <header className="list-header">
                    <h1>Pedidos</h1>
                </header>
                <div>
                    <PedidoClientCard></PedidoClientCard>
                </div>
            </>
    )
}

const WrapPedidos = styled.div `
    width: 1000px;
    height: 100%;
`