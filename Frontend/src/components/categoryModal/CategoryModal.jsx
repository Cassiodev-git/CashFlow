import "./CategoryModal.css"
const CategoryModal = ({ open, onClose, onCreate, categoryName, setCategoryName, icon, setIcon, iconsMap, error }) => {

    if (!open) return null;

    return (
        <div className="form-overlay">
            <div className="form-container">
                <h2>Nova Categoria</h2>

                <form onSubmit={onCreate}>
                    <input
                        type="text"
                        placeholder="Nome da categoria"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />

                    <div className="icons-grid">
                        {Object.entries(iconsMap).map(([key, Icon]) => (
                            <div
                                key={key}
                                className={`icon-item ${icon === key ? "selected" : ""}`}
                                onClick={() => setIcon(key)}
                            >
                                <Icon size={18} />
                            </div>
                        ))}
                    </div>
                        {error && <p className="form-error">{error}</p>}
                    <div className="form-actions">
                        <button type="submit">Criar</button>

                        <button type="button" onClick={onClose}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CategoryModal;