import { Router } from "express";
import TransactionRouter from "./TransactionRouter.js"

const router = Router()

router.use('/Transaction', TransactionRouter)



export default router