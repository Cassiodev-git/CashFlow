import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import {listCategorys, createCategory, deleteCategory  } from "../services/categoryService"

export const useCategories = () => {
    const queryClient = useQueryClient()

    const query = useQuery({
        queryKey: ["categories"],
        queryFn: listCategorys
    })
    const create = useMutation({
        mutationFn: createCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"] })
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const remove = useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["categories"] })
        },onError: (error) => {
            console.log(error)
        }
    })

    return {
        categories: query.data ?? [],
        isLoading: query.isLoading,
        error: query.error,
        create,
        createLoading: remove.isPending,
        createError: create.error,
        remove,
        removeLoading: remove.isPending,
        removeError: remove.error
    }
}