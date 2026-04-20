import { useState, useEffect } from "react"
import {listCategorys, create, deleteCategory} from "../services/categoryService"
import { useRequest } from "./useRequest"

export const useCategory = () => {

    const [categories, setCategories] = useState([])
    const categoryRequest = useRequest()

    const loadCategorys = async () => {
        const categoryData = await categoryRequest.execute(() => listCategorys())
        if(categoryData) setCategories(categoryData)
    }
    useEffect(() => {
        loadCategorys()
    }, [])
    const createCategory = async (data) => {
        const res = await create(data)
        if(res) await loadCategorys()
        return res 
    }
    const deleteCategoryId = async (id) => {
        const res = await deleteCategory(id)
        if(res) await loadCategorys()
        return res 
    }
    return {
            createCategory,
            loadCategorys,
            deleteCategoryId,
            categories,
            loading: categoryRequest.loading,
            error: categoryRequest.error
        }
}