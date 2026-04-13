import { useState, useEffect } from "react"
import {listCategorys} from "../services/categoryService"

export const useCategory = () => {
    const [categories, setCategories] = useState([])
    const [loadingCategory, setLoading] = useState(true)
    const [error, setError ] = useState(null)

    const loadCategorys = async () => {
        try{
            setLoading(true)
            setError(null)
            const res = await listCategorys()
            setCategories(res || [])
        }catch(error){
            setError(error.message)
        }finally{
            setLoading(false)
        }
        
    }
    useEffect(() => {
        loadCategorys()
    }, [])
    return {
            loadCategorys,
            categories,
            loadingCategory,
            error
        }
}