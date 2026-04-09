import api from "./api";

export const userTransactions = async () => {
    const res = await api.get("/users")
    return res.data
}
export const saleData = async () => {
    const res = await api.get("/transactions")
    return res.data
}