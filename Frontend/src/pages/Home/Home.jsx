import "./Home.css";
import Graph from "../../components/graph/graph";
import { useData } from "../../hooks/useData";

const Home = () => {
    const { user, loading, error, sale } = useData();

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Erro: {error}</p>;
    }

    return (
        <div className="main-content">
            <div className="dashboard-container">
                <div className="top-navbar">
                    <h1 className="dashboard-title">Dashboard</h1>

                    <div className="navbar-actions">
                        <button className="btn-nova">+</button>
                        <div className="perfil-avatar">C</div>
                    </div>
                </div>

                <div className="saldo-card">
                    <p className="saldo-header">Saldo</p>

                    <h1 className="saldo-valor">R$ {sale?.sale}</h1>

                    <div className="saldo-info">
                        <span className="entrada">+ R$ {sale?.entries}</span>
                        {sale?.said > 0 && (
                            <span className="saida">- R$ {sale?.said}</span>
                        )}
                    </div>
                </div>

                <Graph />

                <div className="transacoes-card">
                    <h2 className="transacoes-header">Últimas Transações</h2>

                    <div className="transacoes-lista">
                        {user?.transactions?.length > 0 ? (
                            user.transactions.map((u) => (
                                <div className="transacao" key={u.id}>
                                    <div className="transacao-info">
                                        <div>
                                            <p className="titulo">{u.description}</p>
                                            <span className="data">
                                                {new Date(u.date).toLocaleDateString("pt-BR")}
                                            </span>
                                        </div>
                                    </div>

                                    <span className={u.type}>
                                        {u.type === "income" ? "+" : "-"} R$ {u.value}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <p className="sem-transacao">Nenhuma transação registrada</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;