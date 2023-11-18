import { useEffect, useState } from 'react'
import '../assets/css/categorias.css'
import ModalPopup from '../components/ModalAdicionarProduto';
import axios from 'axios';
import { ProdutoCard } from "../components/ProdutoCard"

export function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/produto/")
        .then(({ data }) => {
            console.log(data)
            setProdutos(data)
        })
    }, [])
    
    

    return(
    <>
    <header className="list-header">
        <h1>Produtos</h1>
        
    <ModalPopup></ModalPopup>
    </header>
    <div className="items-list-produtos">
        {produtos.map((v) => <ProdutoCard title={v.nome} img={v.imagens[0]} />)}
    </div>
    </>)
}