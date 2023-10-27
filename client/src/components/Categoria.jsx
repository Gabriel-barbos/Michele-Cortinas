
import "../assets/css/dashboard.css"
export default function Categoria(props) {
    return (
    <>  
    <div className="categoria">
    <div className="categoria-info">
            <h2 className="categoria-titulo">{props.titulo}</h2>
            <p>{props.slug}</p>
        </div>
        <div className="dropdown-container">
        
        </div>
    </div>
    </>
    )
}