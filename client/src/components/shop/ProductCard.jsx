const ProdutoCard = ({produto, onSelect}) => {
    return (

        <div className="produto-card-journey" onClick={() => onSelect(produto.id)}>
            <img src={"http://localhost:8081/imagens/" + produto.imagens[0].nomeArquivo} className="produto-card-journey-image" />
            <div className="produto-card-journey-info">
                <p>{produto.nome}</p>
                <span className="product-card-old-price">{(produto.preco + produto.preco/100*10).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                <h3>{produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} por m²</h3>
            </div>
        </div>
    )
}

export default ProdutoCard