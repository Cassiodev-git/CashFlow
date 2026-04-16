import  Transaction  from "../models/Transaction.js";
import Category from "../models/Category.js"
import User from "../models/User.js";

class UserRepository {
    async listId(id){
        return await User.findOne({
            where: {id},
            attributes: {exclude: ['password']},
            include:[
                {
                    model: Transaction,
                    as: "transactions",
                    attributes: ["id", "description","value","type","date"],
                    include: [
                        {
                            model: Category,
                            as: "category",
                            attributes: ["id", "name", "icon"]
                        }
                    ]
                }
            ]
        })
    }
    async listEmail(email){
        return await User.findOne({
            where: {email},
        })
    }
    async create(data){
        return await User.create(data)
    }
    async toUpdate(id, data){
        return await User.update(data, {
            where: {id}
        })
    }
    async delete(id){
        return await User.destroy({
            where: {id}
        })
    }
}
export default new UserRepository()