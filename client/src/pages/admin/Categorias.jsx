import { useEffect, useState } from 'react'
import '../../assets/css/categorias.css'
import { CategoriaCard } from '../../components/CategoriaCard'
import Modalpopup from '../../components/ModalAdicionarCategoria';
import axios from 'axios';

export function Categorias() {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/categoria/")
        .then(({ data }) => {
            setCategorias(data)
        })
    }, [])
    
    

    return(
    <>
    <header className="list-header">
        <h1>Categorias</h1>
        
    <Modalpopup></Modalpopup>
    </header>
    <div className="items-list">
        {categorias.map((v) => <CategoriaCard titulo={v.titulo} slug={v.slug} id={v.id} />)}
        {categorias.length == 0 && <p>Nenhuma categoria registrada</p>}
    </div>
    </>)
}