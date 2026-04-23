import TransactionService from "../services/TransactionService.js";

class TransactionController {
    async listByUser(req, res){
        const data =  await TransactionService.listById(req.user.id)
        return res.status(200).json(data)
    }
    async create(req, res){
        const userId = req.user.id
        const data = {
            ...req.body,
            userId
        }
        await TransactionService.create(data)
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
    async summary (req, res){
        const userId = req.user.id
        const data = await TransactionService.getUserSummary(userId)
        res.status(200).json(data)
    }
}
export default new TransactionController()