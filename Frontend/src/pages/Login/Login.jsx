import "./Login.css"
import {Link, useNavigate} from "react-router-dom"
import {login} from "../../services/authService.js"
import { useForm } from "../../hooks/useAuthform.js";
import { useToast } from "../../contexts/ToastContext"

const Login = () => {
    const navigate = useNavigate()
    const { success } = useToast()

    const {values, handleChange, handleSubmit, loading, error} = useForm(
        {
            email: "",
            password: ""
        },
        async (data) => {
            await login(data)
            success("Login realizado com sucesso!")
            navigate("/home")
        }
    )
    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="logo">CashFlow</h1>
                <p className="subtitle">Controle suas finanças de forma simples</p>

                <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="Digite seu email" required />
                </div>

                <div className="input-group">
                    <label>Senha:</label>
                    <input type="password" name="password" value={values.password} onChange={handleChange} placeholder="Digite sua senha" required />
                </div>
                {error && <p className="error">{error}</p>}
                <p className="register-link">
                    Não tem conta? <Link to="/register">Criar conta</Link>
                </p>
                <button type="submit" className="btn-login" disabled={loading}>
                    {loading ? "Entrando...":"Entrar"}
                </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
