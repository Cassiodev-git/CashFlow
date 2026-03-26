import { Router } from "express";
import CategoryController from "../controllers/CategoryController.js"
import {authMiddleware}  from "../middleware/authMiddleware.js";

const router = Router()

router.get("/", CategoryController.list)
router.get("/:id",authMiddleware, CategoryController.listId)
router.post("/",authMiddleware, CategoryController.create)
router.delete("/:id",authMiddleware, CategoryController.delete)

export default router