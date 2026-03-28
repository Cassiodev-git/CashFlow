import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    res.status(200).json({
        name: "Backend CashFlow",
        description: "API desenvolvida em Express para o app CashFlow",
        version: "1.0.0",
        status: "Operacional",
        timesTamp: new Date().toISOString(),
        functionalities: [
            "Autenticação JWT",
            "Middleware de erro global",
            "CRUD de usuário e transação"
        ],
        authentication: {
            type: "JWT",
            header: "Authorization: Bearer /Token/"
        },
        mainRoutes: {
            auth: {
                login: "POST /login"
            },
            users: "POST /users",
            transactions: "GET /transactions",
            categorys: "GET /categorys"
        },
        observation: "Há mais rotas disponíveis delete e update",
        
    })
})
export default router