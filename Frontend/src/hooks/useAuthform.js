import { useState } from "react";

export const useForm = (initialValues, submitCallback) => {
    const [values, setValues] = useState(initialValues);
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setError(null);

        try {
            await submitCallback(values);
        } catch (err) {
            setError(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setValues(initialValues);
        setError(null);
    };

    return {
        values,
        handleChange,
        handleSubmit,
        resetForm,
        isSubmitting,
        error
    };
};