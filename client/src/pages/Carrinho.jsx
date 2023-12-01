import '../assets/css/carrinho.css'
import { ItemCarrinho } from '../components/itemCarrinho'
import { DropdownCarrinho } from '../components/dropdownCarrinho'


export function Carrinho(){
    return(
        <>
    <h1 className='title'>Carrinho</h1>
    
    <button className="continue-btn">
    <div className="text-btn"> Continuar comprando</div>
      </button>

<div className='list-items'>

<ItemCarrinho />
<ItemCarrinho groupButtonTop="34.44rem" />
<ItemCarrinho groupButtonTop="46.44rem" />

</div>

<div className='fix-footer-position'>
    
</div>

<div className='carrinho-footer'>

<div className="footer1">
        <div className="total-pedido">Total:</div>
        <h2 className="valor-pedido">R$9321,20</h2>
        <button className="send-order-btn">
          <div className="efetuar-pedido-">Efetuar pedido </div>
        </button>
        <div className="endereo-mini">Endereço</div>
        <p className="endereco">
          <span className="logradouro">
            Logradouro: Rua Benedito Coelho Netto <br/>
          </span>
          <span className="numero">Número: 221
          <br/></span>
          <span className="complemento">Complemento: 94A</span>
        </p>

        <DropdownCarrinho/>
 
      </div>
      </div>

    </>
    )
}