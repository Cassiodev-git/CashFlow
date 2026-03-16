import Category  from "../models/Category.js";

class CategoryRepository {
    async list(){
        return Category.findAll()
    }
    async listId(id){
        return Category.findOne({
            where: {id}
        })
    }
    async create(data){
        return Category.create(data)
    }
    async toUpdate(id, data){
        return Category.toUpdate(data, {
            where: {id}
        })
    }
    async delete(id){
        return Category.destroy({
            where: {id}
        })
    }
}
export default new CategoryRepository()