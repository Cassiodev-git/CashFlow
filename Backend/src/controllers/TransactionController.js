import TransactionService from "../services/TransactionService.js";

class TransactionController {
    async list(req, res){
        const transiction = await TransactionService.list()
        throw new Error("Erro teste")
        return res.status(200).json(transiction)
    }
    async listId(req, res){
        const {id} = req.params
        const transiction = await TransactionService.listId(id)
        return res.status(200).json(transiction)
    }
    async create(req, res){
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
    }
    async update(req, res){
        const {id} = req.params
        await TransactionService.toUpdate(id, req.body)
        return res.status(200).json({
            success: true,
            message: 'Transação atualizada com sucesso'
        })
    }
    async delete(req, res){
        const {id} = req.params
        await TransactionService.delete(id)
        res.status(200).json({
            success: true,
            message: 'Transação deletada com sucesso'
        })
    }
}
export default new TransactionController()