import "./Login.css"
import {Link} from "react-router-dom"
const Login = () => {
    return (
        <div class="login-container">
            <div class="login-card">
                <h1 class="logo">CashFlow</h1>
                <p class="subtitle">Controle suas finanças de forma simples</p>

                <form class="login-form">
                <div class="input-group">
                    <label>Email</label>
                    <input type="email" placeholder="Digite seu email" required />
                </div>

                <div class="input-group">
                    <label>Senha</label>
                    <input type="password" placeholder="Digite sua senha" required />
                </div>
                <p className="register-link">
                    Não tem conta? <Link to="/register">Criar conta</Link>
                </p>
                <button type="submit" class="btn-login">
                    Entrar
                </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
