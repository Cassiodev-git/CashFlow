import api from "./api"

export const newTransaction = async (data) => {
    const res = await api.post("/transactions", data)
    return  res
}
