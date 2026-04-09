import TransactionService from "../services/TransactionService.js";

class TransactionController {
    async listId(req, res){
        const transiction = await TransactionService.listId(req.params.id)
        return res.status(200).json(transiction)
    }
    async listByUser(req, res){
        const data =  await TransactionService.getsummary(req.user.id)
        return res.status(200).json(data)
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
        await TransactionService.toUpdate(req.params.id, req.body)
        return res.status(200).json({
            success: true,
            message: 'Transação atualizada com sucesso'
        })
    }
    async delete(req, res){
        await TransactionService.delete(req.params.id)
        res.status(200).json({
            success: true,
            message: 'Transação deletada com sucesso'
        })
    }
}
export default new TransactionController()