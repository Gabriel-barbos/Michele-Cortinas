import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { Login } from "./Login.jsx";
import { Registro } from "./Registro.jsx";
import { Perfil } from "./Perfil.jsx";
import { Logout } from "./Logout.jsx";
import AuthGuard from "../hooks/useAuthGuard.jsx"

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/registrar" element={<Registro />}/>
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </Router>
    )
}