import { Router } from "express";
import CategoryController from "../controllers/CategoryController.js"

const router = Router()

router.get("/", CategoryController.list)
router.get("/:id", CategoryController.listId)
router.post("/", CategoryController.create)
router.delete("/:id", CategoryController.delete)

export default router