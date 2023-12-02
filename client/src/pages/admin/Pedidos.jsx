import { useState, useEffect } from "react";
import { PedidoAdminCard } from "../../components/admin/PedidoAdminCard"
import axios from "axios";
import "../../assets/css/pedidos.css"

export function Pedidos(){
    const [pedidos, setPedidos] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8081/pedido").then(({data}) => {
            setPedidos(data.allPedido)
        })

    }, [])
    return (
        <>
            <header className="list-header">
                <h1>Pedidos</h1>
            </header>
            <div className="pedidos-list">
                {pedidos.map((p, i) => {
                    return <PedidoAdminCard title={"Pedido #" + (p.id)} pedido={p}></PedidoAdminCard>
                })}
            </div>
        </>
    )
}