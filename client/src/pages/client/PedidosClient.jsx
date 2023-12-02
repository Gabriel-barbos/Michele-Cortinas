import { useState, useEffect } from "react";
import { PedidoClientCard } from "../../components/client/PedidoClientCard"
import axios from "axios";
import "../../assets/css/pedidos.css"
import { useJwt } from "react-jwt";

export function PedidosClient(){
    const [pedidos, setPedidos] = useState([]);
    const token = sessionStorage.getItem("token_client")
    const { decodedToken, isExpired } = useJwt(token);
    
    useEffect(()=>{
        if(decodedToken){
            axios.get(`http://localhost:8081/cliente/pedidos/${decodedToken.id}`)
            .then((response) => {
                console.log(response)
                setPedidos(response.data.allPedidos)
            })
        }
    }, [decodedToken])

    return (
        <>
            <header className="list-header">
                <h1>Pedidos</h1>
            </header>
            <div className="pedidos-list">
                {pedidos.map((p, i) => {
                    return <PedidoClientCard title={"Pedido #" + (p.id)} pedido={p}></PedidoClientCard>
                })}
            </div>
        </>
    )
}