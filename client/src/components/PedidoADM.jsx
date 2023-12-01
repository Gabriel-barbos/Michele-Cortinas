import '../assets/css/orderADM.css'
import cortinaAzul from '../assets/img-teste/cortina-azul.jpg';

export function PedidoADM(){
return(
    <>
      <div className="pedido-adm">

        <div className="img-and-title">
            <img className="imagem-produto" alt="" src={cortinaAzul} />
            <div className="name-prod">Cortina X</div>
          </div>
          
        <div className="status">
          <div className="status-txt">Status:</div>
          <div className="current-status">Em produção</div>
        </div>
        <div className="order-details">
            <p className="largura-prod">Largura: 1,20m</p>
            <p className="altura-prod">Altura: 1,80m</p>
            <p className="cor-prod">Cor: Bege</p>
        </div>

        <div className="valor-prod">R$4894.76</div>

        <button className="cancel">
        <div className="cancelar-pedido">Cancelar pedido</div>
      </button>
      </div>
    

    </>
)
}