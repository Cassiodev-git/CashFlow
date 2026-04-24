import api from "./api"

export const newTransaction = async (data) => {
    const res = await api.post("/transactions", data)
    return  res.data
}

export const update = async (id, data) => {
    const res = await api.put(`/transactions/${id}`, data)
    return res.data
}

export const deleteT = async (id) => {
    const res = await api.delete(`/transactions/${id}`)
    return res.data
}
export const saleData = async () => {
    const res = await api.get("/transactions/sale")
    return res.data
}
export const getTransactions = async () =>{
    const res = await api.get("/transactions")
    return res.data
}