import { SideBar } from "../../components/admin/SideBar"

export function Dashboard({page}){
    return (
        <div className="dashboard-container">
            <SideBar active={page.type.name} />
            <div className="dashboard-content">
                {page}
            </div>
        </div>
    )
}