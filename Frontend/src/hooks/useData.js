import { useEffect, useState } from "react";
import { userTransactions, saleData } from "../services/userService";
import { useRequest } from "./useRequest";

export const useData = () => {

    const userRequest = useRequest();
    const saleRequest = useRequest();

    const [user, setUser] = useState(null);
    const [sale, setSale] = useState("");

    async function fetchData() {
        const userData = await userRequest.execute(() => userTransactions());
        const saleDataRes = await saleRequest.execute(() => saleData());

        if (userData) setUser(userData);
        if (saleDataRes) setSale(saleDataRes);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {
        user,
        sale,

        loading: userRequest.loading || saleRequest.loading,
        error: userRequest.error || saleRequest.error,

        reload: fetchData
    };
};
