import Category  from "../models/Category.js";

class CategoryRepository {
    async list(){
        return await Category.findAll()
    }
    async listId(id){
        return await Category.findOne({
            where: {id}
        })
    }
    async create(data){
        return await Category.create(data)
    }
    async toUpdate(id, data){
        return await Category.toUpdate(data, {
            where: {id}
        })
    }
    async delete(id){
        return await Category.destroy({
            where: {id}
        })
    }
}
export default new CategoryRepository()