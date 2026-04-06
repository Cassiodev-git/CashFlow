import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:9000",
    headers: {
        "Content-Type": "application/json"
    }
})

let isRedirecting = false

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token")

        if (token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`
        }
    }

    return config
    },
    (error) => Promise.reject(error)
)

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401 && !isRedirecting) {
        isRedirecting = true
        localStorage.removeItem("token")
        window.location.href = "/"
        }

    return Promise.reject(error)
    }
)

export default api