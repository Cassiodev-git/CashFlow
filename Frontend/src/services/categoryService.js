import api from "./api"

export const listCategorys = async () => {
    const res = await api.get("/categorys")
    return res
}
export const create = async (data) => {
    const res = await api.post("/categorys", data)
    return res
}