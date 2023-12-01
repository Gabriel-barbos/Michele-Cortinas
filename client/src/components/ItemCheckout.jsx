import "../assets/css/itemCheckout.css"

export function ItemCheckout(props){
    return(
        <>

      <div className="boxCard" >
      <img className="imgprodIcon" alt="" src="../assets/icons/" />
      <h2 className="titulo">Cortina Blackout 3</h2>
      <h3 className="cor">{`Cor: Cinza Concreto `}</h3>
      <p className="desc">persiana com 3 estagios</p>
      <div
        className="valor"
      >{`Valor Aproximado:  R$250,00 `}</div>
      
      <div className="larguraAltura">
        <p className="largura">Largura:</p>
        <p className="altura">Altura:</p>
      </div>
    
      <button className="deleteBtn">
        <div className="deleteBtnChild" />
        <div className="excluir">excluir</div>
      </button>
      <div className="medidas">
        <p className="Mlargura">2,20m </p>
        <p className="Malturs">1,85m</p>
      </div>
    </div>
        </>
    )
}