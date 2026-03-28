import { Router } from "express";
import TransactionRouter from "./TransactionRouter.js"
import CategoryRouter from "./CategoryRouter.js"
import UserRouter from "./UserRouter.js"
import welcomeRoute from "./welcomeRoute.js"

const router = Router()

router.use('/transactions', TransactionRouter)
router.use('/categorys', CategoryRouter)
router.use('/users', UserRouter)
router.use('/', welcomeRoute)




export default router