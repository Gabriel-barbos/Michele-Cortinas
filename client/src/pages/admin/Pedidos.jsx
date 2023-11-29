import styled from "styled-components"
import { useState, useEffect } from "react";
import { PedidoCard } from "../../components/PedidoCard";
import axios from 'axios';

export function Pedidos() {

    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/pedido/")
        .then(({ data }) => {
            setPedidos(data)
        })
    }, [])

    return (
        <>
        <header>
            <h1>Pedidos</h1>
        </header>
        <div className="items-list">
        {pedidos.map((v) => <PedidoCard id={v.id} titulo={v.titulo} img={v.img} description={v.description} altura={v.altura} largura={v.largura} />)}
        {pedidos.length == 0 && <p>Nenhum pedido feito.</p>}
        </div>
        </>
       
        
    )
}

const ItemsList = styled.div `

`
