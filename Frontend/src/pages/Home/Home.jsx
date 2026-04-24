import "../Home/Home.css";
import Graph from "../../components/graph/graph";
import { useTransactions } from "../../hooks/useTransactions";
import { useCategories } from "../../hooks/useCategories";
import { useState } from "react";
import { iconsMap } from "../../utils/iconsMap";
import { useSettings } from "../../contexts/SettingsContext";

const Home = () => {
    const {
        transactions,
        isLoading,
        create,
        sale,
        createError
    } = useTransactions();

    const {categories, isLoading: isLoadingCategory  } = useCategories();
    const { settings } = useSettings();

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

        await create.mutateAsync(data);
        setOpenForm(false)

        setDescript("");
        setValue("");
        setCategory("");
        setDate("");
    };

    if (isLoading) return <p className="laoding">Carregando...</p>;

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

                        <div className="perfil-avatar">
                            C
                        </div>
                    </div>
                </div>


                <div className="saldo-card">
                    <p className="saldo-header">Saldo Atual</p>

                    <h1 className="saldo-valor">
                        {settings.currency} : {" "}
                        {settings?.showBalance && sale?.sale || "****"}
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
                                    disabled={isLoadingCategory}
                                >
                                    <option value="" disabled>
                                        {isLoadingCategory
                                            ? "Carregando..."
                                            : "Selecione a categoria"}
                                    </option>

                                    {categories?.data?.map((c) => (
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

                                {createError && (
                                    <p className="form-error">
                                        {createError.response?.data?.message || "Error ao cadastrar"}
                                    </p>
                                )}

                                <div className="form-actions">
                                    <button
                                        type="submit"
                                        disabled={create.isPending}
                                    >
                                        {create.isPending
                                            ? "Salvando..."
                                            : "Salvar"}
                                    </button>

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
                        {transactions?.length > 0 ? (
                            transactions.map((t) => {
                                const Icon = iconsMap[t.category?.icon];

                                return (
                                    <div className="transacao" key={t.id}>
                                        <div className="transacao-info">
                                            {Icon && (
                                                <Icon
                                                    size={16}
                                                    className="transacao-icon"
                                                />
                                            )}

                                            <div>
                                                <p className="titulo">
                                                    {t.description}
                                                </p>

                                                <span className="data">
                                                    {new Date(t.date).toLocaleDateString(
                                                        `pt-${settings.dateFormat}`
                                                    )}
                                                </span>
                                            </div>
                                        </div>

                                        <span className={t.type}>
                                            {t.type === "income" ? "+" : "-"} R$ {t.value}
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