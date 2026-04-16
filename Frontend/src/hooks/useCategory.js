import { useState, useEffect } from "react"
import {listCategorys, create} from "../services/categoryService"
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
        return res 
    }
    return {
            createCategory,
            loadCategorys,
            categories,
            loading: categoryRequest.loading,
            error: categoryRequest.error
        }
}