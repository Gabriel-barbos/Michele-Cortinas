import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { Login } from "./Login.jsx";
import { Registro } from "./Registro.jsx";
import AuthGuard from "../hooks/useAuthGuard.jsx"

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/registrar" element={<Registro />}/>
                <Route path="/dashboard" element={<AuthGuard Component={<p>Dashboard</p>} />} />
            </Routes>
        </Router>
    )
}