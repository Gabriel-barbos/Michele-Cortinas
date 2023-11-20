import { useEffect, useState } from 'react'
import '../assets/css/categorias.css'
import ModalPopup from '../components/ModalAdicionarProduto';
import axios from 'axios';
import { ProdutoCard } from "../components/ProdutoCard"

export function Produtos() {
    const [produtos, setProdutos] = useState([]);

    const updateProductGrid = () => {
        axios.get("http://localhost:8081/produto/")
        .then(({ data }) => {
            console.log(data)
            setProdutos(data)
        })
    }

    useEffect(() => {
        updateProductGrid();
    }, [])
    
    

    return(
    <>
    <header className="list-header">
        <h1>Produtos</h1>
        
    <ModalPopup></ModalPopup>
    </header>
    <div className="items-list-produtos">
        {/* Alterar api para retornar o path com ip */}
        {produtos.map((v) => 
        <ProdutoCard 
            title={v.nome} 
            img={v.imagens[0] ? "http://localhost:8081/imagens/" + v.imagens[0].nomeArquivo : "https://turismo.eurodicas.com.br/wp-content/uploads/2018/11/place-des-vosges.jpg"} 
            id={v.id}
        />
        )}
    </div>
    </>)
}