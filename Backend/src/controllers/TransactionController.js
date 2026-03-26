import TransactionService from "../services/TransactionService.js";

class TransactionController {
    async list(req, res){
        try{
            const transiction = await TransactionService.list()
            return res.status(200).json(transiction)
        }catch(erro){
            res.status(500).json({
                success: false,
                message: erro.message
            })
        }
    }
    async listId(req, res){
        try{
            const {id} = req.params
            const transiction = await TransactionService.listId(id)
            return res.status(200).json(transiction)
        }catch(erro){
            res.status(500).json({
                success: false,
                message: "Erro interno no servidor"
            })
        }
    }
    async create(req, res){
        try{
            const userId = req.user.id
            const newData = {
                ...req.body,
                userId
            }
            await TransactionService.create(newData)
            return res.status(200).json({
                success: true,
                message: "Transação cadastrada com sucesso"
            })
        }catch(erro){
            return res.status(500).json({
                success: false,
                message: "Erro interno no servidor"
            })
        }
    }
    async update(req, res){
        try{
            const {id} = req.params
            await TransactionService.toUpdate(id, req.body)
            return res.status(200).json({
                success: true,
                message: 'Transação atualizada com sucesso'
            })
        }catch(erro){
            return res.status(500).json({
                success: false,
                message: "Erro interno no servidor"
            })
        }
    }
    async delete(req, res){
        try{
            const {id} = req.params
            await TransactionService.delete(id)
            res.status(200).json({
                success: true,
                message: 'Transação deletada com sucesso'
            })
        }catch(erro){
            return res.status(500).json({
                success: false,
                message: "Erro interno no servidor"
            })
        }
    }
}
export default new TransactionController()