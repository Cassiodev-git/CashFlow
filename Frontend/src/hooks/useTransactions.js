import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import {
    getTransactions,
    newTransaction,
    update,
    deleteT,
    saleData
} from "../services/transactionsService"

export const useTransactions = () => {
    const queryClient = useQueryClient()

    const query = useQuery({
        queryKey: ["transactions"],
        queryFn: getTransactions
    })
    const saleQuery = useQuery({
        queryKey: ["transactions-sale"],
        queryFn: saleData
    })

    const create = useMutation({
        mutationFn: newTransaction,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["transactions"] })
        },onError: (error) => {
            console.log(error)
        }
    })

    const updateTx = useMutation({
        mutationFn: ({ id, data }) => update(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["transactions"] })
        },onError: (error) => {
            console.log(error)
        }
    })

    const remove = useMutation({
        mutationFn: deleteT,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["transactions"] })
        },onError: (error) => {
            console.log(error)
        }
    })

    return {
        transactions: query.data ?? [],
        sale: saleQuery.data ?? null,
        isLoading: query.isLoading,
        error: query.error,
        create,
        createError: create.error,
        update: updateTx,
        updateError: updateTx.error,
        remove,
        removeError: remove.error
    }
}