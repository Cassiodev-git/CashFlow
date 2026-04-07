import { createContext, useContext, useState, useCallback } from "react"
import { Toast } from "../components/Toast/Toast"

const ToastContext = createContext()

export const useToast = () => useContext(ToastContext)

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([])

    const addToast = useCallback((message, type = "info", duration = 3000) => {
        const id = Date.now() + Math.random()
        setToasts((prev) => [...prev, { id, message, type }])
        if (duration > 0) {
            setTimeout(() => {
                setToasts((prev) => prev.filter((t) => t.id !== id))
            }, duration)
        }
    }, [])

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
    }, [])

    const success = useCallback((message, duration) => addToast(message, "success", duration), [addToast])
    const error = useCallback((message, duration) => addToast(message, "error", duration), [addToast])
    const info = useCallback((message, duration) => addToast(message, "info", duration), [addToast])

    return (
        <ToastContext.Provider value={{ success, error, info }}>
            {children}
            <div className="toast-container">
                {toasts.map((toast) => (
                    <Toast key={toast.id} {...toast} onClose={removeToast} />
                ))}
            </div>
        </ToastContext.Provider>
    )
}
