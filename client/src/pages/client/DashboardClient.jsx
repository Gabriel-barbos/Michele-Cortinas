import { SideBar } from "../../components/client/SideBar"

export default function DashboardClient({page}){
    return (
        <div className="dashboard-container">
            <SideBar active={page.type.name} />
            <div className="dashboard-content">
                {page}
            </div>
        </div>
    )
}
