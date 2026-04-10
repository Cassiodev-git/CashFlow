import { useState } from "react"
import {category} from "../services/categoryService"

export const useCategory = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError ] = useState(null)

    const listCategory = async () => {
        try{
            setLoading(true)
            setError(null)
            const res = await category()
            return res
        }catch(error){
            setError(error.message)
        }finally{
            setLoading(false)
        }
        return {
            listCategory,
            loading,
            error
        }
    }
}