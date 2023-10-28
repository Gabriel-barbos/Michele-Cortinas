import { useState } from 'react'
import '../assets/css/categorias.css'
import { CategoriaCard } from '../components/CategoriaCard'
import Modalpopup from '../components/Modalpopup';

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
        
    <Modalpopup></Modalpopup>
    </header>
    <div className="items-list">
        {categoriasMock.map((v) => <CategoriaCard titulo={v.t} slug={v.s} />)}
    </div>
    </>)
}