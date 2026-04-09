import AppError from "../utils/AppError.js";
import TransactionRepository from "../repository/TransactionRepository.js";

class TransactionService {
    async listId(id){
        const transaction = await TransactionRepository.listId(id)
        if(!transaction){
            throw new AppError("Transação não encontrada", 401)
        }
        return transaction
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
        const transaction = await TransactionRepository.listId(id)
        if(!transaction){
            throw new AppError("Transação não encontrada",404)
        }
        return await TransactionRepository.toUpdate(id, data)
        
    }
    async delete(id){
        const transaction = await TransactionRepository.listId(id)

        if(!transaction){
            throw new AppError("Transação não encontrada", 404)
        }
        return await TransactionRepository.delete(id)
    }
    async getsummary(id){
        const transactios = await TransactionRepository.listByUser(id)
        let entries = 0
        let said = 0
        for(const t of transactios){
            if(t.type === "income"){
                entries += parseFloat(t.value)
            }else{
                said += parseFloat(t.value)
            }
        }
        const sale = entries - said

        return {
            entries,
            said,
            sale
        }
    }
}
export default new TransactionService()