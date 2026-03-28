import { Router } from "express";
import TransactionController from "../controllers/TransactionController.js";
import {validateTransaction} from "../middlewares/validateTransaction.js";
import  {authMiddleware} from "../middlewares/authMiddleware.js";

const router = Router()

router.get("/",authMiddleware, TransactionController.list)
router.get("/:id",authMiddleware, TransactionController.listId)
router.post("/",authMiddleware, validateTransaction, TransactionController.create)
router.put('/:id',authMiddleware,validateTransaction, TransactionController.update)
router.delete("/:id",authMiddleware, TransactionController.delete)

export default router