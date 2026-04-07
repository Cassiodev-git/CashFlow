import api from "./api"

export const login = async (data) => {
    const res = await api.post("/users/login", data)
    const token =  await res.data
    localStorage.setItem("token", token)

    return token
}
export const register = async (data) => {
    const res = await api.post("/users", data)
    return res.data
}
