import "../assets/css/produtos.css" 

 
 export function ProdutoCard(props){
  return (
    <div className="produto-card">
      <div className="produto-card-image"><img src={props.img} alt={props.title}/></div>
      <div className="produto-card-title">{props.title}</div>
    </div>
  );
};