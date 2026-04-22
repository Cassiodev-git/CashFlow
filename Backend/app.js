import './src/config/env.js'
import router from './src/routes/index.js'
import express from 'express'
import './src/models/index.js'
import {connection} from './src/config/database.js'
import userRoute from './src/routes/UserRouter.js'
import transactionRoute from './src/routes/TransactionRouter.js'
import categoryRoute from "./src/routes/CategoryRouter.js"
import welcomeRoute from './src/routes/welcomeRoute.js'
import {errorMiddleware} from './src/middlewares/erroMiddleware.js'
import cors from "cors"


const app = express()

app.use(express.json())
app.use(cors({
    origin: "*",
    credentials: true
}))

app.use("/users", userRoute)
app.use("/transactions", transactionRoute)
app.use("/categorys", categoryRoute)
app.use("/", welcomeRoute)

app.use(router)

app.use((req, res) => {
    return res.status(404).json({
        success: false,
        message: "Rota não encontrada"
    })
})

app.use(errorMiddleware)
async function startServer() {

    try{
        await connection.authenticate()
        await connection.sync({force: false})
        
        const PORT = process.env.PORT || 9000

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`)
        })
    }catch(erro){
        console.log(erro)
    }
}
startServer()