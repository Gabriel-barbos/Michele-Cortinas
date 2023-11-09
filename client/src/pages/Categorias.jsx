import { useState } from 'react'
import '../assets/css/categorias.css'
import { CategoriaCard } from '../components/CategoriaCard'
import AdicionarCategoriaModal from '../components/AdicionarCategoriaModal'

const categoriasMock = [{
    t: "Cortinas para salas",
    s: "cortinas-para-salas"
},
{
    t: "Cortinas para quartos",
    s: "cortinas-para-quartos"
}
]





export function Categorias() {
    return(
    <>
    <header className="list-header">
        <h1>Categorias</h1>
    <AdicionarCategoriaModal/>
    </header>
    <div className="items-list">
        {categoriasMock.map((v) => <CategoriaCard titulo={v.t} slug={v.s} />)}
    </div>
    </>)
}