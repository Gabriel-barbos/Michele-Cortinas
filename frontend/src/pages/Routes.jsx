import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { Login } from "./Login.jsx";

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </Router>
    )
}