import "../../assets/css/produtos.css" 
import ModalExcluir from './ModalExcluir';
import ModalEditar from './ModalEditarProduto';

 export function ProdutoCard(props){
  return (
    <div className="produto-card">
      <div className="produto-card-image"><img src={props.img} alt={props.title}/></div>
      <div className="produto-info">
        <div className="produto-button">
          <h4>{props.title}</h4>
          <ModalEditar id={props.id} name={props.title} />
          <ModalExcluir entity={"produto"} id={props.id} name={props.title} />
        </div>
      </div>
    </div>
  );
};