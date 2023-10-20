import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { Login } from "./Login.jsx";
import { Registro } from "./Registro.jsx";

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/registro" element={<Registro />}/>
            </Routes>
        </Router>
    )
}