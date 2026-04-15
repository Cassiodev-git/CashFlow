import { newTransaction, update, deleteT } from "../services/transactionsService";
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
    const deleteTransaction = async (id) => {
        const res = await execute(() => deleteT(id))
        return res
    }

    return {
        deleteTransaction,
        createTransaction,
        updateTransaction,
        loading,
        error
    };
};