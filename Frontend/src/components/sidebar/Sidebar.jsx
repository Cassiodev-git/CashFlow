import "./Sidebar.css"
import { useState } from "react"
import logo from "../../assets/SideBarIcon.png"
import Home from "../../assets/homeIcon.png"
import Transaction from "../../assets/transacaoIcon.png"
import Config from "../../assets/configIcon.png"
import {NavLink} from "react-router-dom"
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button 
                className={`menu-toggle ${isOpen ? "hidden" : ""}`} 
                onClick={() => setIsOpen(true)}
            >
                <span></span>
            </button>

            {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}

            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="sidebar-logo">
                    <img src={logo} alt="CashFlow Logo" className="logo-img" />
                    <span className="logo-text">Cash<span className="logo-text-sec">Flow</span></span>
                </div>
                <hr className="line-logo"/>
                <nav className="sidebar-menu">
                    <NavLink 
                        to="/home" 
                        className={({ isActive }) => 
                            `menu-item ${isActive ? "active" : ""}`
                        }
                    >
                        <img src={Home} alt="Home" className="logo-img-side" />
                        Dashboard
                    </NavLink>        
                    <NavLink
                        to="/transaction"
                        className={({ isActive }) =>
                            `menu-item ${isActive ? "active" : ""}`
                        }
                        
                    >
                        <img src={Transaction} alt="Transaction" className="logo-img-side"/>
                        Transações
                    </NavLink>
                        
                    <a href="#" className="menu-item">
                        <img src={Config} alt="CashFlow Logo" className="logo-img-side" /> Configurações
                    </a>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar