import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "../pages/Login/Login.jsx"
import Home from "../pages/Home/Home.jsx"
import Registration from "../pages/Registration/Registration.jsx"
import ProtectedRoute from "../components/router/ProtectedRoute.jsx"
import Layout from "../components/layout/Layout.jsx"
import Transactions from "../pages/Transactions/Transactions.jsx"
import Settings from "../pages/Settings/Settings.jsx"
const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Registration/>}/>
                <Route element={<ProtectedRoute><Layout/></ProtectedRoute>}>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/transaction" element={<Transactions/>}/>
                    <Route path="/config" element={<Settings/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes