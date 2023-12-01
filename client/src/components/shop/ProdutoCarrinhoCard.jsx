import { useEffect, useState } from "react"
import axios from "axios";
import { IconButton } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const ProdutoCarrinhoCard = ({produto, onDelete, index}) => {
    const [produtoFromBD, setProdutoFromBD] = useState({});
    const [variacaoFromBD, setVariacaoFromBD] = useState("")

    useEffect(() => {
        axios.get("http://localhost:8081/produto/" + produto.id)
        .then(({data}) => {
            setProdutoFromBD(data)
        })    

        axios.get("http://localhost:8081/variacao/" + produto.variacao)
        .then(({data}) => {
            setVariacaoFromBD(data.titulo)
        })
    }, [produto])

    return (
        <div className="produto-carrinho-card">
            <IconButton className="produto-carrinho-card-close" color="error" onClick={() => onDelete(index)}>
                <HighlightOffIcon />
            </IconButton>
                <div className="produto-card-left">
                    <div className="produto-carrinho-card-img">
                        {produtoFromBD.imagens && <img src={"http://localhost:8081/imagens/" + produtoFromBD.imagens[0].nomeArquivo} />}
                    </div>
                    <div className="produto-carrinho-card-info">
                        <h3 className="produto-carrinho-card-nome">{produtoFromBD.nome} {variacaoFromBD ? `(${variacaoFromBD})` : ""}</h3>
                        <div className="produto-carrinho-card-sizes">
                            <span>Largura: {produto.largura}m</span>
                            <span>Altura: {produto.altura}m</span>
                        </div>
                    </div>
            </div>
            <div className="produto-carrinho-card-price">
                <h2 className="produto-carrinho-card-price-label">{(produtoFromBD.preco * produto.largura * produto.altura).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>
            </div>
        </div>
    )
}

export default ProdutoCarrinhoCard 