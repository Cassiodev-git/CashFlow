import { useState } from "react";

export const useForm = (initialValues, submitCallback) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitCallback(values);
    };

    return {
        values,
        handleSubmit,
        handleChange
    };
};