import "./Home.css";

const Home = () => {
    const transacoes = [
        {
        id: 1,
        titulo: "Salário",
        data: "Hoje, 15:30",
        valor: 3200,
        tipo: "entrada",
        },
        {
        id: 2,
        titulo: "Aluguel",
        data: "Ontem, 11:00",
        valor: 700,
        tipo: "saida",
        },
        {
        id: 3,
        titulo: "Supermercado",
        data: "22 de abr, 14:00",
        valor: 400,
        tipo: "saida",
        },
        {
        id: 4,
        titulo: "Investimento",
        data: "21 de abr, 10:00",
        valor: 150,
        tipo: "entrada",
        },
        {
        id: 5,
        titulo: "Investimento",
        data: "21 de abr, 10:00",
        valor: 150,
        tipo: "entrada",
        },
        {
        id: 6,
        titulo: "Investimento",
        data: "21 de abr, 10:00",
        valor: 150,
        tipo: "entrada",
        },
        {
        id: 7,
        titulo: "Investimento",
        data: "21 de abr, 10:00",
        valor: 150,
        tipo: "entrada",
        },
    
    ];

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

                <h1 className="saldo-valor">R$ 2.545,00</h1>

                <div className="saldo-info">
                    <span className="entrada">+ R$ 3.200,00</span>

                    <span className="saida">- R$ 1.100,00</span>
                </div>
                </div>
                <div className="transacoes-card">
                <h2 className="transacoes-header">Últimas Transações</h2>

                <div className="transacoes-lista">
                    {transacoes.map((t) => (
                    <div className="transacao" key={t.id}>
                        <div className="transacao-info">
                        <div className={`icon ${t.tipo}`}></div>

                        <div>
                            <p className="titulo">{t.titulo}</p>
                            <span className="data">{t.data}</span>
                        </div>
                        </div>

                        <span className={t.tipo}>
                        {t.tipo === "entrada" ? "+" : "-"} R$ {t.valor}
                        </span>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </div>
        );
};

export default Home;
