import Category from "../models/Category.js";
import Transaction from "../models/Transaction.js";

class TransactionRepository {
    async listId(id){
        return await Transaction.findOne({
            where: {id},
            attributes: ["id", "description", "value","type","date"],
            include: [
                {
                    model: Category,
                    as: "category",
                    attributes: ["id", "name"]
                }
            ]
        })
    }
    async create(data){
        return await Transaction.create(data)
    }
    async toUpdate(id, data){
        return Transaction.update(data, {
            where: {id}
        })
    }
    async delete(id){
        return await Transaction.destroy({
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