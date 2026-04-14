import { useState, useEffect } from "react"
import {listCategorys} from "../services/categoryService"
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
    return {
            loadCategorys,
            categories,
            loading: categoryRequest.loading,
            error: categoryRequest.error
        }
}