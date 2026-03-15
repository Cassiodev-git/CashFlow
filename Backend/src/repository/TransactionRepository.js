import Transaction from "../models/Transaction.js";

class TransactionRepository {
    async list(){
        return Transaction.findAll()
    }
    async listId(id){
        return Transaction.findOne({
            where: {id}
        })
    }
    async create(data){
        return Transaction.create(data)
    }
    async toUpdate(id, data){
        return Transaction.update(data, {
            where: {id}
        })
    }
    async delete(id){
        return Transaction.destroy({
            where: {id}
        })
    }
}
export default new TransactionRepository()