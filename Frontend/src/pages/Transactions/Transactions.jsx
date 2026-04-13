import "./Transactions.css";
import { useData } from "../../hooks/useData";
import { useCategory } from "../../hooks/useCategory";
const Transactions = () => {
    const { user, loading, error, reload } = useData();
    const { categories, loadingCategory } = useCategory();
    const teste = () => {
        console.log(categories.data)
    }
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

                <button className="filter-button">Filtros</button>
                </div>
            </div>

            <div className="transacoes-lista">
                {user?.transactions?.length > 0 ? (
                user.transactions.map((u) => (
                    <div className="transacao" key={u.id}>
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
        </div>
    );
};
export default Transactions;
