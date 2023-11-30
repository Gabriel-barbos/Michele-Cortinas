import { SideBar } from "../../components/admin/SideBar"

export function Pedidos(){
    return (
        <div className="dashboard-container">
            <div className="dashboard-content">
            <header className="list-header">
                <h1>Pedidos</h1>
            </header>

            <div className="order-box">
                <img className='order-img' src={cortinaAzul}/>
                    <h2 className='title'> Pedido #001</h2>
                        <h3 className='cor'>Cor: cinza Concreto</h3>
                            <h2 className='valor'>Valor: 550,50 R$</h2>
                        <p className='desc'>
                            Cortina Azul com regulagem de brilho, anti-bacterias, persiana com cabo extra
                        </p>

            <button className='approve-btn'>
                Aprovar pedido
            </button>

            <button className='wpp-btn'>
                Entrar em contato com o cliente
            </button>

            <h3 className='cliente'>Cliente: Danilo </h3>
            <h4 className='altura'> Altura: 1.85 m</h4>
            <h4 className='largura'> Largura: 2.50 m</h4>
            </div>
    
            </div>
        </div>
    )
}