import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { Login } from "./admin/Login.jsx";
import { Registro } from "./admin/Registro.jsx";
import { Perfil } from "./admin/Perfil.jsx";
import { Logout } from "./admin/Logout.jsx";
import { Dashboard } from "./admin/Dashboard.jsx";
import Modalpopup from "../components/ModalAdicionarCategoria.jsx";
import AuthGuard from "../hooks/useAuthGuard.jsx"
import { Categorias } from "./admin/Categorias.jsx";
import Home from "./user/Home.jsx";

import '../assets/css/login.css'
import '../assets/css/dashboard.css'
import '../assets/css/login.css'
import { Produtos } from "./admin/Produtos.jsx";
import { Pedidos } from "./admin/Pedidos.jsx";

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
                <Route path="/dashboard/produtos" element={
                    <Dashboard page={<Produtos />} />
                }/>
                <Route path="/dashboard/pedidos" element={
                    <Dashboard page={<Pedidos />} />
                }/>
                <Route path="/modal" element={<Modalpopup />}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    )
}