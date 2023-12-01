import { SideBar } from "../../components/client/SideBar"
export function Painel({page}){
    const PAGES_DICT = {
        "PerfilClient": "Perfil"
    }

    return (
        <>
            <div className="dashboard-container">
                <SideBar active={PAGES_DICT[page.type.name] ? PAGES_DICT[page.type.name] : page.type.name} />
                <div className="dashboard-content">
                    {page}
                </div>
            </div>
        </>
    )
}