import { useEffect, useState } from "react";
import { userTransactions, saleData } from "../services/userService";

export const useData = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [sale, setSale] = useState("")

    async function fetchData(e) {
        try{
            setError(null)
            setLoading(true)
            const data = await userTransactions()
            const sale = await saleData()
            setUser(data)
            setSale(sale)
        }catch(error){
            setError(error.message)
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return {
        user,
        loading,
        error,
        sale,
        reload: fetchData
    }
}
