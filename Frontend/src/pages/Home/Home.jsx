import "../Home/Home.css";
import Graph from "../../components/graph/graph";
import { useData } from "../../hooks/useData";
import { useTransaction } from "../../hooks/useTransaction";
import { useCategory } from "../../hooks/useCategory";
import { useState } from "react";
import { iconsMap } from "../../utils/iconsMap";

const Home = () => {
    const { user, loading, error: dataError, sale, reload } = useData();
    const { createTransaction, error: transactionError } = useTransaction();
    const { categories, loadingCategory } = useCategory();

    const [openForm, setOpenForm] = useState(false);

    const [description, setDescript] = useState("");
    const [value, setValue] = useState("");
    const [type, setType] = useState("income");
    const [date, setDate] = useState("");
    const [categoryId, setCategory] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            description,
            value: Number(value),
            CategoryId: categoryId,
            type,
            date
        };

        await createTransaction(data);

        setDescript("");
        setValue("");
        setCategory("");
        setDate("");

        reload();
    };
    const teste = () =>{
        console.log(user.transactions)
    }

    if (loading) return <p>Carregando...</p>;
    if (dataError) return <p>Erro: {dataError}</p>;

    return (
        <div className="main-content">
            <div className="dashboard-container">

                <div className="top-navbar">
                    <h1 className="dashboard-title">Dashboard</h1>

                    <div className="navbar-actions">
                        <button
                            className="btn-nova"
                            onClick={() => setOpenForm(true)}
                        >
                            +
                        </button>
                        <div className="perfil-avatar" onClick={teste}>C</div>
                    </div>
                </div>

                <div className="saldo-card">
                    <p className="saldo-header">Saldo Atual</p>

                    <h1 className="saldo-valor">
                        R$ {sale?.sale}
                    </h1>

                    <div className="saldo-info">
                        <span className="entrada">
                            + R$ {sale?.entries}
                        </span>

                        {sale?.said > 0 && (
                            <span className="saida">
                                - R$ {sale?.said}
                            </span>
                        )}
                    </div>
                </div>


                {openForm && (
                    <div className="form-overlay">
                        <div className="form-container">
                            <h2>Nova Transação</h2>

                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescript(e.target.value)}
                                    placeholder="Descrição"
                                />

                                <input
                                    type="number"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    placeholder="Valor"
                                />

                                <select
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <option value="income">Entrada</option>
                                    <option value="expense">Saída</option>
                                </select>

                                <select
                                    value={categoryId}
                                    onChange={(e) => setCategory(e.target.value)}
                                    disabled={loadingCategory}
                                >
                                    <option value="" disabled>
                                        {loadingCategory
                                            ? "Carregando..."
                                            : "Selecione a categoria"}
                                    </option>

                                    {categories.data.map((c) => (
                                        <option key={c.id} value={c.id}>
                                            {c.name}
                                        </option>
                                    ))}
                                </select>

                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />

                                {transactionError && (
                                    <p className="form-error">
                                        {transactionError}
                                    </p>
                                )}

                                <div className="form-actions">
                                    <button type="submit">Salvar</button>

                                    <button
                                        type="button"
                                        onClick={() => setOpenForm(false)}
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                <Graph
                    entries={sale?.entries}
                    said={sale?.said}
                />
                <div className="transacoes-card">
                    <h2 className="transacoes-header">
                        Últimas Transações
                    </h2>

                    <div className="transacoes-lista">
                        {user?.transactions?.length > 0 ? (
                            user.transactions.map((u) => {
                                const Icon = iconsMap[u.category?.icon];

                                return (
                                    <div className="transacao" key={u.id}>
                                        <div className="transacao-info">
                                            {Icon && (
                                                <Icon
                                                    size={16}
                                                    className="transacao-icon"
                                                />
                                            )}

                                            <div>
                                                <p className="titulo">
                                                    {u.description}
                                                </p>

                                                <span className="data">
                                                    {new Date(u.date).toLocaleDateString("pt-BR")}
                                                </span>
                                            </div>
                                        </div>

                                        <span className={u.type}>
                                            {u.type === "income" ? "+" : "-"} R$ {u.value}
                                        </span>
                                    </div>
                                );
                            })
                        ) : (
                            <p className="sem-transacao">
                                Nenhuma transação registrada
                            </p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;