import api from "./api"

export const listCategorys = async () => {
    const res = await api.get("/categorys")
    return res
}