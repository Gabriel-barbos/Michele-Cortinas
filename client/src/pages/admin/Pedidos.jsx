import { useState, useEffect } from "react";
import { PedidoAdminCard } from "../../components/admin/PedidoAdminCard"
import axios from "axios";

export function Pedidos(){
    const [pedidos, setPedidos] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/pedido").then(({data}) => {
            setPedidos(data.allPedido)
            console.log(data.allPedido)
        })

    }, [])
    return (
        <>
            <header className="list-header">
                <h1>Pedidos</h1>
            </header>

            <PedidoAdminCard></PedidoAdminCard>
        </>
    )
}