import { Router } from "express";
import UserController from "../controllers/UserController.js";
import {validateUser} from "../middlewares/validateUser.js"
import {authMiddleware} from "../middlewares/authMiddleware.js"

const router = Router()
router.post("/login", UserController.login)
router.post("/",validateUser, UserController.create)

router.get("/", UserController.list)
router.get("/:id",authMiddleware, UserController.listId)
router.put("/:id",authMiddleware, validateUser, UserController.update)
router.delete("/:id",authMiddleware, UserController.delete)

export default router