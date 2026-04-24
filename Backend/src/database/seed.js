import  Category  from "../models/Category.js"
import { defaultCategories } from "./seeders/defaultCategories.js"

export const runSeed = async () => {
    const count = await Category.count()

    if (count === 0) {
        await Category.bulkCreate(defaultCategories)
        console.log("Categorias padrão criadas")
    }
}