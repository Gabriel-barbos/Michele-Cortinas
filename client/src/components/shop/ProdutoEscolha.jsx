import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProdutoEscolha = ({produto}) => {
    return (
        <div className="produto-escolha">
            {produto !== null && 
                <>
                    <div className="col produto-escolha-gallery">
                        <img src={"http://localhost:8081/imagens/" + produto.imagens[0].nomeArquivo} className="produto-escolha-gallery-cover" />
                    </div>
                    <div className="col produto-escolha-info">
                        <div className="produto-escolha-info-content">
                            <h2>{produto.nome}</h2>
                            <p className="produto-escolha-info-desc">{produto.descricao}</p>
                        </div>
                        <div className="produto-escolha-buy">
                            <p style={{display: "flex", alignItems: "center", gap: "5px", color: "#aaa"}}>Inserir no carrinho <ArrowForwardIcon /></p>
                            <h2>{produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>
                        </div>
                    </div>
                </>
            }
        </div>
        )
}
export default ProdutoEscolha