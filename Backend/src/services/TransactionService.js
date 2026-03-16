import TransactionRepository from "../repository/TransactionRepository.js";

class TransactionService {
    async list(){
        return await TransactionRepository.list()
    }
    async listId(id){
        const transaction = await TransactionRepository.listId(id)
        if(!transaction){
            throw new Error("Transação não encontrada")
        }
        return transaction
    }
    async create(data){
        const {type, value, description, CategoryId, date} = data
        if(!type || !value || !description || !CategoryId || !date){
            throw new Error("Todos os campos são obrigatórios")
        }
        if(type !== "income" && type !== "expense"){
            throw new Error("Tipo inválido")
        }
        if(value <= 0){
            throw new Error("Valor deve ser maior que zero")
        }
        return await TransactionRepository.create(data)
    }
    async toUpdate(id, data){
        const {type, value, description, CategoryId, date} = data
        if(!type || !value || !description || !CategoryId || !date){
            throw new Error("Todos os campos são obrigatórios")
        }
        if(type !== "income" && type !== "expense"){
            throw new Error("Tipo inválido")
        }
        if(value <= 0){
            throw new Error("Valor deve ser maior que zero")
        }
        const transaction = await TransactionRepository.listId(id)
        if(!transaction){
            throw new Error("Transação não encontrada")
        }
        return await TransactionRepository.toUpdate(id, data)
        
    }
    async delete(id){
        const transaction = await TransactionRepository.listId(id)

        if(!transaction){
            throw new Error("Transação não encontrada")
        }
        return await TransactionRepository.delete(id)
    }
}
export default new TransactionService()