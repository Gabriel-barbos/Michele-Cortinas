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
            axios.get('http://localhost:8081/variacao/1')
            .then((response) => {
                let produto = {...data};
                for(let variacao in response.data) {
                    console.log(variacao)
                }
                setProduto(data)
            })
        })
    }

    useEffect(() => {
        const categoria = sessionStorage.getItem("category")

        axios.get('http://localhost:8081/produto/pesquisa', { params: { q: categoria } })
        .then(({data}) => {
            setProdutos(data.produtos)
        })

    }, [])

    const closeProdutoEscolha = () => {
        window.location = "/"
    }

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
            style={{opacity: produto !== null ? 1 : 0, zIndex: produto !== null ? 999 : -2}}>
                {produto && <ProdutoEscolha produto={produto} closeHandle={closeProdutoEscolha} />}
            </div>
            
        </div>
        
    )
}

export default Produtos
