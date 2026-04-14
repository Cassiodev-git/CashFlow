import { newTransaction, update } from "../services/transactionsService";
import { useRequest } from "./useRequest";

export const useTransaction = () => {
    const {execute, loading, error} = useRequest()
    const createTransaction = async (data, onSuccess) => {
        const res = await execute(() => newTransaction(data))

        if(res && onSuccess) onSuccess()
        
        return res
    };

    const updateTransaction = async (id, data, onSuccess) => {
        const res = await execute(() => update(id, data))

        if(res && onSuccess) onSuccess()

        return res
    };

    return {
        createTransaction,
        updateTransaction,
        loading,
        error
    };
};