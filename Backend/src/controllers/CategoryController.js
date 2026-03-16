import CategoryService from '../services/CategoryService.js'

class CategoryController{
    async list(req, res){
        try{
            const categorys = await CategoryService.list()
            return res.status(200).json(categorys)
        }catch(erro){
            return res.status(500).json({
                success: false,
                message: erro.message
            })
        }
    }
    async listId(req, res){
        try{
            const {id} = req.params
            const category = await CategoryService.listId(id)
            return res.status(200).json(category)
        }catch(erro){
            return res.status(500).json({
                success: false,
                message: erro.message
            })
        }
    }
    async create(req, res){
        try{
            await CategoryService.create(req.body)
            return res.status(200).json({
                success: true,
                message: 'Categoria cadastrada com sucesso'
            })
        }catch(erro){
            return res.status(500).json({
                success: false,
                message: erro.message
            })
        }
    }
    async update(req, res){
        try{
            const {id} = req.params
            await CategoryService.toUpdate(id, req.body)
            return res.status(200).json({
                success: true,
                message: 'Categoria atualizada com sucesso'
            })
        }catch(erro){
            return res.status(500).json({
                success: false,
                message: erro.message
            })
        }
    }
    async delete(req, res){
        try{
            const {id} = req.params
            return res.status(200).json({
                success: true,
                message: 'Categoria atualizada com sucesso'
            })
        }catch(erro){
            return res.status(500).json({
                success: false,
                message: erro.message
            })
        }
    }
}
export default new CategoryController()