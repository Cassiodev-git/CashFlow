import api from "./api"

export const login = async (data) => {
    const res = await api.post("/users/login", data)
    return res.data
}
export const register = async (data) => {
    const res = await api.post("/users", data)
    return res.data
}
