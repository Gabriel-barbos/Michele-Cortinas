import { SideBar } from "../../components/admin/SideBar"

export function Dashboard({page}){
    // const token = sessionStorage.getItem("token_admin")

    // if(!token){
    //     return window.location = "/dashboard/login"
    // }
    
    return (
        <>
        <div className="dashboard-container">
            <SideBar active={page.type.name} />
            <div className="dashboard-content">
                {page}
            </div>
        </div>
        </>
    )
}