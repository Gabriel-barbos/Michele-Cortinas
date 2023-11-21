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
import Modalpopup from "../components/ModalAdicionarCategoria.jsx";
import AuthGuard from "../hooks/useAuthGuard.jsx"
import { Categorias } from "./Categorias.jsx";
import { ProdutoUnico } from "./ProdutoUnico.jsx";
import {EditarPerfil} from "./EditarPerfil.jsx"
import '../assets/css/login.css'
import '../assets/css/dashboard.css'
import '../assets/css/login.css'
import { Produtos } from "./Produtos.jsx";
import { Checkout } from "./Checkout.jsx";
import { ItemCheckout } from "../components/ItemCheckout.jsx";
export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/registrar" element={<Registro />}/>
                <Route path="/produtoUnico" element={<ProdutoUnico />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/Checkout" element={<Checkout />}/>
                <Route path ="/dashboard/editarPerfil" element ={<Dashboard page ={<EditarPerfil/>}/>} />
                <Route path="/dashboard/categorias" element={
                    <Dashboard page={<Categorias />} />
                }/>
                <Route path="/dashboard/produtos" element={
                    <Dashboard page={<Produtos />} />
                }/>
                <Route path="/modal" element={<ItemCheckout />}/>

            </Routes>
        </Router>
    )
}