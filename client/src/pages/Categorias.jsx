import { useState, useEffect } from 'react'
import '../assets/css/categorias.css'
import { CategoriaCard } from '../components/CategoriaCard'
import AdicionarCategoriaModal from '../components/AdicionarCategoriaModal'
import axios from "axios"

export function Categorias() {
    const [categorias, setCategorias] = useState([{}]);

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:8081/categoria/`,
        }).then(({data}) => {
            setCategorias(data)
        })
    }, [])
    

    return(
    <>
    <header className="list-header">
        <h1>Categorias</h1>
    <AdicionarCategoriaModal/>
    </header>
    <div className="items-list">
        {categorias.map((categoria) => <CategoriaCard key={categoria.id} titulo={categoria.titulo} slug={categoria.slug} />)}
    </div>
    </>)
}