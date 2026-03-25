import { Router } from "express";
import TransactionRouter from "./TransactionRouter.js"
import CategoryRouter from "./CategoryRouter.js"
import UserRouter from "./UserRouter.js"

const router = Router()

router.use('/Transaction', TransactionRouter)
router.use('/Category', CategoryRouter)
router.use('/User', UserRouter)




export default router