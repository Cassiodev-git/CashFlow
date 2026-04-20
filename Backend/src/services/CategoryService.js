import CategoryRepository from '../repository/CategoryRepository.js'
import AppError from '../utils/AppError.js'

class CategoryService{
    async list(){
        return await CategoryRepository.list()
    }
    async listId(id){
        const category = await CategoryRepository.listId(id)
        if(!category){
            throw new AppError("Categoria não encontrada", 404)
        }
        return category
    }
    async create(data){
        const {name} = data
        if(!name){
            throw new AppError("Nome é obrigatorio", 400)
        }
        return await CategoryRepository.create(data)
    }
    async toUpdate(id, data){
        const {name} = data
        if(!name){
            throw new AppError("Nome é obrigatorio",400)
        }
        return await CategoryRepository.toUpdate(id, data)
    }
    async delete(id){
        const category = await CategoryRepository.listId(id)
        if(!category){
            throw new AppError("Categoria não encontrada", 404)
        }
        return await CategoryRepository.delete(id)
    }
}
export default new CategoryService()