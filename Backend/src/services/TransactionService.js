import AppError from "../utils/AppError.js";
import TransactionRepository from "../repository/TransactionRepository.js";

class TransactionService {
    async listById(id){
        const transaction = await TransactionRepository.listByUser(id)
        if(!transaction){
            throw new AppError("Transações não encontradas", 404)
        }
        return transaction
    }
    async getUserSummary(userId) {
        const result = await TransactionRepository.getUserSummary(userId)

        const { entries = 0, said = 0 } = result[0] || {}

        return {
            entries: Number(entries),
            said: Number(said),
            sale: Number(entries) - Number(said)
        }
    }
    async create(data){
        const {type, value, description, CategoryId, date,} = data
        if(!type || !value || !description || !CategoryId || !date ){
            throw new AppError("Todos os campos são obrigatórios", 400)
        }
        if(type !== "income" && type !== "expense"){
            throw new AppError("Tipo inválido", 400)
        }
        if(value <= 0){
            throw new AppError("Valor deve ser maior que zero", 400)
        }
        return await TransactionRepository.create(data)
    }
    async toUpdate(id, data){
        const {type, value, description, CategoryId, date} = data
        if(!type || !value || !description || !CategoryId || !date){
            throw new AppError("Todos os campos são obrigatórios",400)
        }
        if(type !== "income" && type !== "expense"){
            throw new AppError("Tipo inválido", 400)
        }
        if(value <= 0){
            throw new AppError("Valor deve ser maior que zero",400)
        }
        const transaction = await TransactionRepository.listById(id)
        if(!transaction){
            throw new AppError("Transação não encontrada",404)
        }
        return await TransactionRepository.toUpdate(id, data)

    }
    async delete(id){
        const transaction = await TransactionRepository.listById(id)

        if(!transaction){
            throw new AppError("Transação não encontrada", 404)
        }
        return await TransactionRepository.delete(id)
    }
}
export default new TransactionService()