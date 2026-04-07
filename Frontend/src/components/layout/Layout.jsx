import { Outlet } from "react-router-dom"
import Sidebar from "../sidebar/Sidebar"
import "./Layout.css"

const Layout = () => {
    return (
        <div className="layout">
            <Sidebar />
            <div className="layout-content">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout