import "./Toast.css"

export const Toast = ({ id, message, type, onClose }) => {
    const icons = {
        success: "✓",
        error: "✕",
        info: "ℹ"
    }

    return (
        <div className={`toast toast-${type}`} role="alert">
            <span className="toast-icon">{icons[type]}</span>
            <span className="toast-message">{message}</span>
            <button className="toast-close" onClick={() => onClose(id)}>{icons.error}</button>
        </div>
    )
}
