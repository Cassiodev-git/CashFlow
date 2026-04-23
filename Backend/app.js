import './src/config/env.js'
import router from './src/routes/index.js'
import express from 'express'
import './src/models/index.js'
import { connection } from './src/config/database.js'
import userRoute from './src/routes/UserRouter.js'
import transactionRoute from './src/routes/TransactionRouter.js'
import categoryRoute from "./src/routes/CategoryRouter.js"
import welcomeRoute from './src/routes/welcomeRoute.js'
import { errorMiddleware } from './src/middlewares/erroMiddleware.js'
import cors from "cors"
import rateLimit from "express-rate-limit"

const app = express()

app.use(express.json())

app.use(cors({
    origin: "*"
}))


const strictLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
        return res.status(429).json({
            success: false,
            message: "Você atingiu o limite, tente novamente mais tarde",
        })
    }
})


const readLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    standardHeaders: true,
    legacyHeaders: false
})


const methodLimiter = (req, res, next) => {
    if (req.method === "GET") {
        return readLimiter(req, res, next)
    } else {
        return strictLimiter(req, res, next)
    }
}



app.use("/transactions", methodLimiter)
app.use("/users", methodLimiter)
app.use("/categorys", methodLimiter)

app.use("/transactions", transactionRoute)
app.use("/users", userRoute)
app.use("/categorys", categoryRoute)
app.use("/", welcomeRoute)



app.use((req, res) => {
    return res.status(404).json({
        success: false,
        message: "Rota não encontrada"
    })
})

app.use(errorMiddleware)


async function startServer() {
    try {
        await connection.authenticate()
        await connection.sync({ force: false })

        const PORT = process.env.PORT || 9000

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`)
        })
    } catch (erro) {
        console.log("Erro no servidor")
    }
}

startServer()