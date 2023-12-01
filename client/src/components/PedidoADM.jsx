import '../assets/css/orderADM.css'
import cortinaAzul from '../assets/img-teste/cortina-azul.jpg';

export function PedidoADM(){
return(
    <>
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

</div>
    

    </>
)
}