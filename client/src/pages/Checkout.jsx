import '../assets/css/checkout.css'
import { ItemCheckout } from '../components/ItemCheckout'

export function Checkout() {
    return(
        <>
            
      <header className="header" />
      <h1 className="title ">Checkout</h1>
      
      <ItemCheckout top={50} left={100}/>
      <div className="checkoutCard">
        <div className="checkoutBox" />
        <h2 className="total">TOTAL: 750 R$</h2>
        <button className="sendBtn">
          <div className="enviar">Enviar Pedido</div>
        </button>

        <div className="enderecoBox">
          <div className="enderecoBox1" />
          <div className="enderecoDeEntrega">Endereço de entrega:</div>
          <div className="alterar">alterar</div>
          <div className="endereco">
            <p>rua da Bahia, 345 - ap 416 <br />
              Cidade baixa <br />
              Xique-Xique,BA <br />
              </p> 
        
          </div>
        </div>

        <h3 className="avisoh2">Importante</h3>
        <p className="avisotxt">
        o envio do orçamento final com o prazo final 
        será enviado em até 2 dias utéis 
        </p>
      </div>
      <footer className="footer" />

        </>
    )
}