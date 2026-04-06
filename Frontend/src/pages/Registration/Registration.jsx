import "./Registration.css"
import {Link, useNavigate} from "react-router-dom"
import {register} from "../../services/authService.js"
import { useState, useEffect } from "react";
const Registration = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try{
            await register({
                name,
                email,
                password,
            })
            navigate("/")
        }catch(err){
            setError(err.response?.data.message || "Erro ao cadastrar")
        } finally{
            setLoading(false)
        }
    }
    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="logo">CashFlow</h1>
                <p className="subtitle">Controle suas finanças de forma simples</p>

                <form className="login-form" onSubmit={handleSubmit} >

                <div className="input-group">
                    <label>Nome:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome" required />
                </div>

                <div className="input-group">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" required />
                </div>

                <div className="input-group">
                    <label>Senha:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" required />
                </div>
                {error && <p className="error">{error}</p>}
                <p className="register-link">
                    Você possui conta? <Link to="/">Fazer login</Link>
                </p>
                <button type="submit" className="btn-login">
                    Cadastrar
                </button>
                </form>
            </div>
        </div>
    );
};

export default Registration;
