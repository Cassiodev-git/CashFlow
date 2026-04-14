import { useState } from "react";

export const useRequest = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const execute = async (callback) => {
        try{
            setLoading(true)
            setError(null)
            const res = await callback()
            return res
        }catch(err){
            setError(err.message)
        }finally{
            setLoading(false)
        }
    }
    return{
        execute,
        loading,
        error
    }
}