import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "../pages/Login/Login.jsx"
import Home from "../pages/Home/Home.jsx"
import Registration from "../pages/Registration/Registration.jsx"
const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Registration/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes