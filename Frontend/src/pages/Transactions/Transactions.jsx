import "../Transactions/Transactions.css"
import { useState, useEffect } from "react";
import { useData } from "../../hooks/useData";
import { useCategory } from "../../hooks/useCategory";
import {useTransaction} from "../../hooks/useTransaction"

const Transactions = () => {
    const { user, reload } = useData();
    const {updateTransaction, response, error, loading} = useTransaction()
    const { categories, loadingCategory } = useCategory();

    const [openForm, setOpenForm] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    const [description, setDescript] = useState("");
    const [value, setValue] = useState("");
    const [type, setType] = useState("income");
    const [categoryId, setCategory] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        if (selectedTransaction) {
        setDescript(selectedTransaction.description);
        setValue(selectedTransaction.value);
        setType(selectedTransaction.type);
        setCategory(selectedTransaction.category_id);
        setDate(selectedTransaction.date.split("T")[0]);
        }
    }, [selectedTransaction]);

    const handleSubmit = async (e, id) => {
        e.preventDefault();

        const data = {
            description: description,
            value: value,
            type: type,
            CategoryId: categoryId,
            date: date
        }
        await updateTransaction(id, data)
        if(response.data.success){
            reload()
            setOpenForm(false);
            setSelectedTransaction(null);
        }
    };
    const handleDelete = (id) => {

    };

    return (
        <div className="dashboard-content">

            <div className="coluna-principal">
                
                <div className="transacoes-card">
                <div className="transacoes-topo">
                    <h2 className="transacoes-header">Últimas Transações</h2>

                    <div className="top-bar">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="search-input"
                        />
                    </div>
                </div>

                <div className="transacoes-lista">
                    {user?.transactions?.length > 0 ? (
                    user.transactions.map((u) => (
                        <div
                        className="transacao"
                        key={u.id}
                        onClick={() => {
                            setSelectedTransaction(u);
                            setOpenForm(true);
                        }}
                        >
                        <div className="transacao-esquerda">
                            <p className="titulo">{u.description}</p>
                            <span className="data">
                            {new Date(u.date).toLocaleDateString("pt-BR")}
                            </span>
                        </div>

                        <div className="transacao-direita">
                            <span className={`valor ${u.type}`}>
                            {u.type === "income" ? "+" : "-"} R$ {u.value}
                            </span>
                        </div>
                        </div>
                    ))
                    ) : (
                    <p className="sem-transacao">Nenhuma transação registrada</p>
                    )}
                </div>
                </div>
            </div>

        <div className="coluna-lateral">
            <div className="categorias-card">
            <h2 className="categorias-header">Categorias</h2>

            <div className="categorias-top-bar">
                <input
                type="text"
                placeholder="Buscar categoria..."
                className="categorias-search"
                />
            </div>

            <button className="btn-add">+ Nova Categoria</button>

            <div className="categorias-lista">
                {categories.data?.length > 0 ? (
                categories.data.map((c) => (
                    <div className="categoria" key={c.id}>
                    <p className="categoria-nome">{c.name}</p>
                    <button className="btn-excluir">Excluir</button>
                    </div>
                ))
                ) : (
                <p className="sem-categoria">Nenhuma categoria encontrada</p>
                )}
            </div>
            </div>
        </div>

        {openForm && selectedTransaction && (
            <div className="form-overlay">
            <div className="form-container">
                <h2>Editar Transação</h2>

                <form onSubmit={(e) => handleSubmit(e, selectedTransaction.id)}>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescript(e.target.value)}
                    placeholder="Título"
                />

                <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Valor"
                />

                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="income">Entrada</option>
                    <option value="expense">Saída</option>
                </select>

                <select
                    value={categoryId}
                    onChange={(e) => setCategory(e.target.value)}
                    disabled={loadingCategory}
                >
                    <option value="" disabled>
                    {loadingCategory ? "Carregando..." : "Selecione a categoria"}
                    </option>

                    {categories.data?.map((c) => (
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

                <div className="form-actions">
                    <button type="submit">Salvar</button>

                    <button
                    type="button"
                    onClick={() => {
                        setOpenForm(false);
                        setSelectedTransaction(null);
                    }}
                    >
                    Cancelar
                    </button>
                    <button
                    type="button"
                    className="btn-excluir-transacao"
                    onClick={() => handleDelete(selectedTransaction.id)}
                    >
                    Excluir
                    </button>
                </div>
                </form>
            </div>
            </div>
        )}
        </div>
    );
};

export default Transactions;
