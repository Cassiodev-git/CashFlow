import { newTransaction, update } from "../services/transactionsService";
import { useState } from "react";

export const useTransaction = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState("")

    const createTransaction = async (data) => {
        try {
            setLoading(true);
            setError(null);

            const res = await newTransaction(data);
            setResponse(res)
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const updateTransaction = async (id, data, onSuccess) => {
        try {
            setLoading(true);
            setError(null);

            const res = await update(id, data);

            setResponse(res)
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        createTransaction,
        updateTransaction,
        response,
        loading,
        error
    };
};