import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { LoginAdmin } from "./admin/LoginAdmin.jsx"
import { Perfil } from "./admin/Perfil.jsx";
import Enderecos from "./client/Enderecos.jsx";
import { Logout } from "./Logout.jsx";
import { Dashboard } from "./admin/Dashboard.jsx";
import { Registro } from "./client/Registro.jsx";

/* remover */
import { Register } from "./admin/Register.jsx";

import DashboardClient from "./client/DashboardClient.jsx";
import PerfilClient from "./client/PerfilClient.jsx";
import { PedidosClient } from "./client/PedidosClient.jsx";
import Telefones from "./client/Telefones.jsx";
import LandingPage from "./shop/LandingPage.jsx";

import Clientes from "./admin/Clientes.jsx";
import { Categorias } from "./admin/Categorias.jsx";
import { Produtos } from "./admin/Produtos.jsx";
import { Pedidos } from "./admin/Pedidos.jsx";

import { Painel } from "./client/Painel.jsx";
import Relatorios from "./admin/Relatorios.jsx";
//import { LoginClient } from "./client/LoginClient.jsx"
import { Login } from "./client/Login.jsx"

import '../assets/css/login.css'
import '../assets/css/dashboard.css'
import '../assets/css/login.css'
import Home from "./shop/Home"



export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>

                <Route path="/dashboard/login" element={<LoginAdmin />}/>
                <Route path="/dashboard/perfil" element={
                    <Dashboard page={<Perfil />} />}
                />
                <Route path="/logout" element={<Logout />} />
                <Route path="/dashboard/categorias" element={
                    <Dashboard page={<Categorias />} />
                }/>
                <Route path="/dashboard/produtos" element={
                    <Dashboard page={<Produtos />} />
                }/>

                <Route path="/dashboard/clientes" element={
                    <Dashboard page={<Clientes />} />
                }/>
                <Route path="/dashboard/pedidos" element={
                    <Dashboard page={<Pedidos />} />
                }/>
                <Route path="/dashboard/relatorios" element={
                    <Dashboard page={<Relatorios />} />
                }/>
                
                <Route path="/dashboard/entrar" element={
                    <Register />
                }/>

                <Route path="/registrar" element={<Registro />}/>
                <Route path="/entrar" element={<Login />}/>

                <Route path="/painel" element={
                    <Painel page={<PerfilClient />} />
                } />
                <Route path="/relatorios" element={<Relatorios/>}/>
            
                <Route path="/painel/pedidos" element={
                <DashboardClient page={<PedidosClient />}/>
                }/>
                
                <Route path="/painel/enderecos" element={
                <DashboardClient page={<Enderecos />}/>
                }/>
                
                
                <Route path="/painel/telefones" element={
                <DashboardClient page={<Telefones />}/>
                }/> 

                <Route path="/intro" element={<LandingPage/>}/>
            </Routes>
        </Router>
    )
}