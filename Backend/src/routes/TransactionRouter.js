import { Router } from "express";
import TransactionController from "../controllers/TransactionController.js";
import validateTransaction from "../middleware/validateTransaction.js";

const router = Router()

router.get("/", TransactionController.list)
router.get("/:id",validateTransaction, TransactionController.listId)
router.post("/",validateTransaction, TransactionController.create)
router.put('/:id',validateTransaction, TransactionController.update)
router.delete("/:id", TransactionController.delete)

export default router