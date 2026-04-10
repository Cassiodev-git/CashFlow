import "./Home.css";
import Graph from "../../components/graph/graph";
import { useData } from "../../hooks/useData";
import { useTransaction } from "../../hooks/useTransaction";
import { useState } from "react";

const Home = () => {
    const { user, loading, error, sale, reload } = useData(); 
    const [openForm, setOpenForm] = useState(false);

    const [description, setDescript] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("income")
    const [date, setDate] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            description,
            value: Number(value),
            type,
            cate
        }
    }


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
                        <button className="btn-nova" onClick={() => setOpenForm(true)}>+</button>
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
                {openForm && (
                    <div className="form-overlay">
                        <div className="form-container">
                            <h2>Nova Transação</h2>
                            <form >
                                <input type="text" placeholder="Título" />
                                <input type="number" placeholder="Valor" />

                                <select>
                                    <option value="income">Entrada</option>
                                    <option value="expense">Saída</option>
                                </select>

                                <input type="date" />

                                <div className="form-actions">
                                    <button type="submit">Salvar</button>
                                    <button type="button" onClick={() => setOpenForm(false)}>
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                <Graph entries={sale?.entries} said={sale?.said} />

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