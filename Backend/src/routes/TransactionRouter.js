import { Router } from "express";
import TransactionController from "../controllers/TransactionController.js";

const router = Router()

router.get("/", TransactionController.list)
router.get("/:id", TransactionController.listId)
router.post("/", TransactionController.create)
router.put('/:id', TransactionController.update)
router.delete("/:id", TransactionController.delete)

export default router