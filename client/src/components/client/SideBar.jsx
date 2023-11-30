import "../../assets/css/sidebar.css"
import LogoDashboard from "../admin/LogoDashboard"

export function SideBar(props) {
    console.log(props.active)
    return (
        <div className="sidebar">
            <div className="sidebar-logo-container">
                <LogoDashboard width="100%" height="35px" />
            </div>
            <div className="sidebar-items">
                <a href="perfil" className={`${props.active == "Perfil" ? "active" : ""} sidebar-item` }>Perfil</a>
                <a href="#" className={`${props.active == "Enderecos" ? "active" : ""} sidebar-item` }>Endereços</a>
                <a href="pedidos" className={`${props.active == "Pedidos" ? "active" : ""} sidebar-item` }>Meus pedidos</a>
            </div>
            <div className="sidebar-footer">
                <a href="/logout" className="sidebar-item">Sair</a>
            </div>
        </div>
    )
}