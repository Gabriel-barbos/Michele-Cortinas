
import { PedidoClientCard } from "../../components/client/PedidoClientCard"
import styled from "styled-components"
export default function PedidosClient(){
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