import api from "./api"

export const categorys = async () => {
    const res = api.get("/categorys")
    return res
}