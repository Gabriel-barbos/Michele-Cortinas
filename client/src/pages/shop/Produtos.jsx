import axios from "axios"
import { useEffect, useState } from "react"
import ProdutoCard from "../../components/shop/ProductCard"
import ProdutoEscolha from "../../components/shop/ProdutoEscolha"

import "../../assets/css/produtos-journey.css"

const Produtos = ({stepHandler}) => {
    const [produtos, setProdutos] = useState([])
    const [produto, setProduto] = useState(null);
    const productSelectedHandle = (id) => {
        axios.get('http://localhost:8081/produto/' + id)
        .then(({data}) => {
            setProduto(data)
        })
    }

    useEffect(() => {
        const categoria = sessionStorage.getItem("category")

        axios.get('http://localhost:8081/produto/pesquisa', { params: { q: categoria } })
        .then(({data}) => {
            setProdutos(data.produtos)
        })

    }, [])

    return (
        <div className="produtos-journey-grid">
            {produtos.map((p) => {
                return (
                <>
                    <ProdutoCard produto={p} key={p.id} onSelect={productSelectedHandle} />
                </>
                )
            })}

            <div className="produto-journey-escolha-container" 
            onClick={(e) => {
                if(e.target.className === "produto-journey-escolha-container"){
                    setProduto(null)
                }
            }}
            style={{transform: produto !== null ? "translateY(0)" : "translateY(100%)"}}>
                <ProdutoEscolha produto={produto} />
            </div>
            
        </div>
        
    )
}

export default Produtos
