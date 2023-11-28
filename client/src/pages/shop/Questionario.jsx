import { useEffect, useState } from "react"
import axios from "axios"

const Questionario = () => {
    const [categorias, setCategorias] = useState([]); 
    const selectCategoryHandler = (category) => {
        console.log(category)
    }
    
    useEffect(() => {
        setCategorias([]);

        axios.get("http://localhost:8081/categoria")
        .then(({data}) => {
            for(let category of data){
                let img = "";
                switch(category.titulo.toLowerCase()){
                    case 'cortinas': 
                        img = "/assets/img/cortina-example.webp"
                        break;
                    case 'persianas':
                        img = "/assets/img/persiana-example.webp"
                        break;
                }
                setCategorias(categorias => [...categorias, {img: img, label: category.titulo}])
            }
        })
    }, [])
    
    return (
        <div className="questionario-cards">
            {categorias.map((categoria, index) => {
                return (
                    <div className="questionario-card" key={index}>
                        <img src={categoria.img} className="questionario-card-image"/>
                        <div className="questionario-card-info" onClick={() => {selectCategoryHandler(categoria.titulo)}}> 
                            <h3 className="questionario-card-label">{categoria.label}</h3>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default Questionario;