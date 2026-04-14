import api from "./api"

export const newTransaction = async (data) => {
    const res = await api.post("/transactions", data)
    return  res
}

export const update = async (id, data) => {
    const res = await api.put(`/transactions/${id}`, data)
    return res
}
