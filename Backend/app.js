import './src/config/env.js'
import router from './src/routes/index.js'
import express from 'express'
import './src/models/index.js'
import {connection} from './src/config/database.js'

const app = express()

app.use(express.json())

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