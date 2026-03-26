import { where } from "sequelize";
import  Transaction  from "../models/Transaction.js";
import User from "../models/User.js";

class UserRepository {
    async list(){
        return User.findAll({
            include: {
                model: Transaction,
                as: 'transactions'
            },
            attributes: {exclude:['password']}
        })
    }
    async listId(id){
        return User.findOne({
            where: {id},
            attributes: {exclude: ['password']},
            include: {
                model: Transaction,
                as: 'transactions'
            }
        })
    }
    async listEmail(email){
        return User.findOne({
            where: {email},
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