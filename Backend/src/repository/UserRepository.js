import { Transaction } from "../models";
import User from "../models/User";

class UserRepository {
    async list(){
        return User.finOne({
            include: {
                model: Transaction,
                as: 'transactions'
            }
        })
    }
    async listId(id){
        return User.findOne({
            where: {id}
        })
    }
    async listEmail(email){
        return User.findOne({
            where: {email}
        })
    }
    async create(data){
        return User.create(data)
    }
    async toUpdate(id, data){
        return User.update(data, {
            where: {id}
        })
    }
    async delete(id){
        return User.destroy({
            where: {id}
        })
    }
}
export default new UserRepository()