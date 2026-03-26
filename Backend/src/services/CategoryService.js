import CategoryRepository from '../repository/CategoryRepository.js'

class CategoryService{
    async list(){
        return await CategoryRepository.list()
    }
    async listId(id){
        const category = await CategoryRepository.listId(id)
        if(!category){
            throw new Error("Categoria não encontrada")
        }
        return category
    }
    async create(data){
        const {name} = data
        if(!name){
            throw new Error("Nome é obrigatorio")
        }
        return await CategoryRepository.create(data)
    }
    async toUpdate(id, data){
        const {name} = data
        if(!name){
            throw new Error("Nome é obrigatorio")
        }
        return await CategoryRepository.toUpdate(id, data)
    }
    async delete(id){
        const category = await CategoryRepository.listId(id)
        if(!category){
            throw new Error("Categoria não encontrada")
        }
        return await CategoryRepository.delete(id)
    }
}
export default new CategoryService()