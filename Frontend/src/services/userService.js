import api from "./api";

export const userTransactions = async () => {
    const res = await api.get("/users")
    return res.data
}
