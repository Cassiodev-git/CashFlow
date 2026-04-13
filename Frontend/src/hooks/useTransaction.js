import { newTransaction } from "../services/transactionsService";
import { useState } from "react";

export const useTransaction = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const createTransaction  = async (data, onSuccess) => {
        try{
            setLoading(true)
            setError(null)
            await newTransaction(data)
            if(onSuccess) onSuccess()
        }catch(error){
            setError(error.message)
        }finally{
            setLoading(false)
        }
        
    }
    return {
            createTransaction,
            loading,
            error
        } 
}
