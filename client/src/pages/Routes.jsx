import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { Login } from "./Login.jsx";
import { Registro } from "./Registro.jsx";
import { Perfil } from "./Perfil.jsx";
import { Logout } from "./Logout.jsx";
import { Dashboard } from "./Dashboard.jsx";
import { ModalTeste } from "../components/ModalTeste.jsx";
import AuthGuard from "../hooks/useAuthGuard.jsx"

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/registrar" element={<Registro />}/>
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/modal" element={<ModalTeste />}/>

            </Routes>
        </Router>
    )
}