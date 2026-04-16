import "../Transactions/Transactions.css";
import { useState, useEffect } from "react";

import { useData } from "../../hooks/useData";
import { useCategory } from "../../hooks/useCategory";
import { useTransaction } from "../../hooks/useTransaction";

import { iconsMap } from "../../utils/iconsMap";
import CategoryModal from "../../components/categoryModal/CategoryModal";

const Transactions = () => {

    const { user, reload } = useData();

    const {
        updateTransaction,
        deleteTransaction,
        error,
        loading
    } = useTransaction();

    const {
        categories,
        loadingCategory,
        error: categoryError,
        createCategory,
        loadCategorys
    } = useCategory();


    const [openForm, setOpenForm] = useState(false);
    const [openCategoryForm, setOpenCategoryForm] = useState(false);

    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [search, setSearch] = useState("");

    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [type, setType] = useState("income");
    const [categoryId, setCategory] = useState("");
    const [date, setDate] = useState("");


    const [categoryName, setCategoryName] = useState("");
    const [icon, setIcon] = useState("");


    useEffect(() => {
        if (!selectedTransaction) return;

        setDescription(selectedTransaction.description);
        setValue(selectedTransaction.value);
        setType(selectedTransaction.type);
        setCategory(selectedTransaction.category_id);
        setDate(selectedTransaction.date.split("T")[0]);
    }, [selectedTransaction]);


    const handleSubmit = async (e, id) => {
        e.preventDefault();

        const data = {
            description,
            value,
            type,
            categoryId,
            date
        };

        const res = await updateTransaction(id, data);

        if (res) {
            reload();
            setOpenForm(false);
            setSelectedTransaction(null);
        }
    };

    const handleDelete = async (id) => {
        await deleteTransaction(id);
        reload();
        setOpenForm(false);
        setSelectedTransaction(null);
    };

    const handleCreateCategory = async (e) => {
        e.preventDefault();

        const data = {
            name: categoryName,
            icon
        };

        await createCategory(data);
        loadCategorys();

        setOpenCategoryForm(false);
        setCategoryName("");
        setIcon("");
    };

    const filteredTransactions = user?.transactions?.filter((t) => {
        const text = search.toLowerCase();

        return (
            t.description?.toLowerCase().includes(text) ||
            t.value.toString().includes(text) ||
            t.type.toLowerCase().includes(text) ||
            t.category?.name?.toLowerCase().includes(text)
        );
    });


    return (
        <div className="dashboard-content">

            <div className="coluna-principal">
                <div className="transacoes-card">

                    <div className="transacoes-topo">
                        <h2 className="transacoes-header">Últimas Transações</h2>

                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="search-input"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="transacoes-lista">
                        {filteredTransactions?.length > 0 ? (
                            filteredTransactions.map((t) => {
                                const Icon = iconsMap[t.category?.icon];

                                return (
                                    <div
                                        key={t.id}
                                        className="transacao"
                                        onClick={() => {
                                            setSelectedTransaction(t);
                                            setOpenForm(true);
                                        }}
                                    >
                                        <div className="transacao-esquerda">
                                            <div className="icon-wrapper">
                                                {Icon && <Icon size={16} />}
                                            </div>

                                            <div className="transacao-info">
                                                <p className="titulo">{t.description}</p>
                                                <span className="data">
                                                    {new Date(t.date).toLocaleDateString("pt-BR")}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="transacao-direita">
                                            <span className={`valor ${t.type}`}>
                                                {t.type === "income" ? "+" : "-"} R$ {t.value}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <p className="sem-transacao">
                                {search
                                    ? "Nenhuma transação encontrada"
                                    : "Nenhuma transação registrada"}
                            </p>
                        )}
                    </div>
                </div>
            </div>


            <div className="coluna-lateral">
                <div className="categorias-card">

                    <h2 className="categorias-header">Categorias</h2>

                    <input
                        type="text"
                        placeholder="Buscar categoria..."
                        className="categorias-search"
                    />

                    <button
                        className="btn-add"
                        onClick={() => setOpenCategoryForm(true)}
                    >
                        + Nova Categoria
                    </button>

                    <div className="categorias-lista">
                        {categories.data?.length > 0 ? (
                            categories.data.map((c) => {
                                const Icon = iconsMap[c.icon];

                                return (
                                    <div key={c.id} className="categoria">
                                        <div className="icon-wrapper">
                                            {Icon && <Icon size={14} />}
                                        </div>

                                        <p className="categoria-nome">{c.name}</p>

                                        <button className="btn-excluir">
                                            Excluir
                                        </button>
                                    </div>
                                );
                            })
                        ) : (
                            <p className="sem-categoria">
                                Nenhuma categoria encontrada
                            </p>
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
                                onChange={(e) => setDescription(e.target.value)}
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
                                <option value="">
                                    {loadingCategory
                                        ? "Carregando..."
                                        : "Selecione a categoria"}
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

                            {error && <p className="form-error">{error}</p>}

                            <div className="form-actions">

                                <button type="submit" disabled={loading}>
                                    {loading ? "Salvando..." : "Salvar"}
                                </button>

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
                                    disabled={loading}
                                    onClick={() => handleDelete(selectedTransaction.id)}
                                >
                                    Excluir
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            )}
            <CategoryModal
                open={openCategoryForm}
                onClose={() => {
                    setOpenCategoryForm(false);
                    setCategoryName("");
                    setIcon("");
                }}
                onCreate={handleCreateCategory}
                categoryName={categoryName}
                setCategoryName={setCategoryName}
                icon={icon}
                setIcon={setIcon}
                iconsMap={iconsMap}
                error={categoryError}
            />
        </div>
    );
};

export default Transactions;