import Category from "../models/Category.js";
import Transaction from "../models/Transaction.js";

class TransactionRepository {
    async list(){
        return Transaction.findAll({
            include:{
                model: Category,
                as: 'category'
            }
        })
    }
    async listId(id){
        return Transaction.findOne({
            where: {id},
            include:{
                model: Category,
                as: 'category'
            }
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
    async listByUser(id){
        return await Transaction.findAll({
            where: {
                userId: id
            }
        })
    }
}
export default new TransactionRepository()