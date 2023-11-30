import { PedidoCard } from "../../components/PedidoCard"

export function Pedidos(){
    return (
        <div className="dashboard-container">
            <div className="dashboard-content">
            <header className="list-header">
                <h1>Pedidos</h1>
            </header>

            <PedidoCard></PedidoCard>
            </div>
        </div>
    )
}