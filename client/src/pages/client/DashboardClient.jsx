import { SideBar } from "../../components/client/SideBar"

export default function DashboardClient({page}){
    const token = sessionStorage.getItem("token_client")

    if(!token){
        return window.location = "/entrar"
    }

    return (
        <div className="dashboard-container">
            <SideBar active={page.type.name} />
            <div className="dashboard-content">
                {page}
            </div>
        </div>
    )
}
