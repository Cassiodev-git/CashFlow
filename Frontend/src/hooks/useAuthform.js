import { useState } from "react";

export const useForm = (initialValues, submitCallback) => {
    const [values, setValues] = useState(initialValues)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        try{
            await submitCallback(values)
        }catch(err){
            setError(err.response?.data?.message || "Erro")
        }finally {
            setLoading(false)
        }
    }
    return{
        values,
        handleSubmit,
        handleChange,
        loading,
        error
    }
}