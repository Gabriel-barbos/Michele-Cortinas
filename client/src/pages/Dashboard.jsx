import { Barra_Lateral } from "../components/Barra_Lateral.jsx"
import { Listagem_Categorias } from "../components/Listagem_Categorias.jsx"
import { DashboardContent } from "../components/DashboardContent.jsx"
import "../assets/css/dashboard.css"

export function Dashboard() {
    return (
        <>
            <div className="container-dashboard">
                <Barra_Lateral />
                <DashboardContent>
                    <Listagem_Categorias />
                </DashboardContent>
            </div>

        </>
    )


}