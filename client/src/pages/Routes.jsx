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
import Modalpopup from "../components/Modalpopup.jsx";
import AuthGuard from "../hooks/useAuthGuard.jsx"
import { Categorias } from "./Categorias.jsx";

import '../assets/css/login.css'
import '../assets/css/dashboard.css'
import '../assets/css/login.css'

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/registrar" element={<Registro />}/>
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/dashboard/categorias" element={
                    <Dashboard page={<Categorias />} />
                }/>
                <Route path="/modal" element={<Modalpopup />}/>

            </Routes>
        </Router>
    )
}