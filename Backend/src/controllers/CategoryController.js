import CategoryService from '../services/CategoryService.js'

class CategoryController{
    async list(req, res){
        const categorys = await CategoryService.list()
        return res.status(200).json(categorys)
    }
    async listId(req, res){
        const {id} = req.params
        const category = await CategoryService.listId(id)
        return res.status(200).json(category)
    }
    async create(req, res){
        await CategoryService.create(req.body)
        return res.status(200).json({
            success: true,
            message: 'Categoria cadastrada com sucesso'
        })
    }
    async update(req, res){
        const {id} = req.params
        await CategoryService.toUpdate(id, req.body)
        return res.status(200).json({
            success: true,
            message: 'Categoria atualizada com sucesso'
        })
    }
    async delete(req, res){
        const {id} = req.params
        return res.status(200).json({
            success: true,
            message: 'Categoria atualizada com sucesso'
        })
    }
}
export default new CategoryController()