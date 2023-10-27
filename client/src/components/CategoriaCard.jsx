export function CategoriaCard(props){
    return (
        <div className="categoria-card">
            <div className="categoria-card-info">
                <h3 className="categoria-card-info-titulo">{props.titulo}</h3>
                <span className="categoria-card-info-slug">{props.slug}</span>
            </div>
            <div className="categoria-card-action"></div>
        </div>
    )
}