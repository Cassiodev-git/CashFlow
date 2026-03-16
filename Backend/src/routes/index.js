import { Router } from "express";
import TransactionRouter from "./TransactionRouter.js"
import CategoryRouter from "./CategoryRouter.js"

const router = Router()

router.use('/Transaction', TransactionRouter)
router.use('/Category', CategoryRouter)



export default router