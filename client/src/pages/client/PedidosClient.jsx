import { PedidoCard } from "../../components/PedidoCard"
import styled from "styled-components"
export function PedidosClient(){
    return (
        <div className="dashboard-container">
            <div className="dashboard-content">
            <header className="list-header">
                <h1>Pedidos</h1>
            </header>
            <div>
                <PedidoCard></PedidoCard>
            </div>
            </div>
        </div>
    )
}

const WrapPedidos = styled.div `
    width: 1000px;
    height: 100%;
`