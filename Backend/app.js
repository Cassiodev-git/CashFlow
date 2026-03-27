import './src/config/env.js'
import router from './src/routes/index.js'
import express from 'express'
import './src/models/index.js'
import {connection} from './src/config/database.js'
import userRoute from './src/routes/UserRouter.js'
import transactionRoute from './src/routes/TransactionRouter.js'
import {errorMiddleware} from './src/middleware/erroMiddleware.js'

const app = express()

app.use(express.json())

app.use("/User", userRoute)
app.use("/Transaction", transactionRoute)

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
        app.use(router)
        app.listen(9000)
    }catch(erro){
        console.log("Erro ao iniciar a API")
    }
}
startServer()