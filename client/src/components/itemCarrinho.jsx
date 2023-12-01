import '../assets/css/itemCarrinho.css'
import x from '../assets/img-teste/x-icon.png'
import cortinaRed from '../assets/img-teste/cortina-vermelha.jpg'
import { useMemo } from "react";
  export function ItemCarrinho({ groupButtonTop}) {
  const itemCartStyle = useMemo(() => {
    return {
      top: groupButtonTop,
    };
  }, [groupButtonTop]);
return(
  
    <div className="item-cart" style={itemCartStyle}  >
      <div className="imgbtn">
        <img className="img-prod-icon" alt="" src={cortinaRed} />
        <button className="delete-btn" />
        <button className="vector-group">
          <img className="group-item" alt="" src={x} />
        
        </button>
      </div>
      <div className="left-item">
        <h2 className="titulo-prod">Cortina tal</h2>
        <p className="desc-prod">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, soluta! Quae, suscipit totam illo vel assumenda deleniti maxime ad illum incidunt quos, beatae, itaque odio et ipsum earum amet vitae.
        </p>
      </div>
      <div className="right-items">
        <h3 className="titulo-prod">
          <p className="detalhes">Largura: 1,20m</p>
          <p className="detalhes">Altura: 1,80m</p>
          <p className="detalhes">Cor: Bege</p>
        </h3>
        <h2 className="valor2">R$4894.76</h2>
      </div>
    </div>

)
}