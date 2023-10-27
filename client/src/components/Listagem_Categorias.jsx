import Categoria from "./Categoria"


export function Listagem_Categorias() {
    
     return (
        <>
        <div className="listagem-de-categoria">
            <div className="listagem-text">
            <h1>Categorias</h1>
            <a href="#">Adicionar</a>
           
            </div>
            <Categoria titulo="teste" slug="slug"></Categoria>
            <Categoria titulo="categoria" slug="slug2"></Categoria>
            <Categoria></Categoria>
                
        </div>
        
        </>

     )
}