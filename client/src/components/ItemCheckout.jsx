import "../assets/css/itemCheckout.css"
import { useMemo } from "react";

export function ItemCheckout({groupButtonTop}){
  const itemCartStyle = useMemo(() => {
    return {
      top: groupButtonTop,
    };
  }, [groupButtonTop]);    
  
  return(
        <>
      <div className="boxCard" >
      <img className="imgprodIcon" alt="" src="../assets/icons/" />
      <h2 className="titulo">Cortina Blackout 3</h2>
      <h3 className="cor">{`Cor: Cinza Concreto `}</h3>
      <p className="desc">persiana com 3 estagios</p>
      <div
        className="valor-item"
      >{`Valor Aproximado:  R$250,00 `}</div>
      
      
    
      <button className="deleteBtn">
        <div className="deleteBtnChild" />
        <div className="excluir">excluir</div>
      </button>
      <div className="medidas">
        <p className="largura-p">largura:2,20m </p>
        <p className="altura-p">altura:1,85m</p>
      </div>
    </div>
        </>
    )
}