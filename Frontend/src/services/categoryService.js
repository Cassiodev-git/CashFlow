import api from "./api"

export const listCategorys = async () => {
    const res = await api.get("/categorys")
    return res
}
export const createCategory = async (data) => {
    const res = await api.post("/categorys", data)
    return res
}
export const deleteCategory = async (id) => {
    const res = await api.delete(`/categorys/${id}`)
    return res
}   