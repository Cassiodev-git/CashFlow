import { Model, Sequelize, where } from "sequelize";
import Transaction from "../models/Transaction.js";
import Category from "../models/Category.js"

class TransactionRepository {
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
    async listById (id){
        return await Transaction.findAll({
            where: {
                id
            }
        })
    }
    async listByUser(id){
        return await Transaction.findAll({
            where: {
                userId: id
            },
            include: [
                {
                    model: Category,
                    as: "category",
                    attributes: ["id", "name", "icon"]
                }
            ]

        })
    }
    async getUserSummary(userId) {
        return await Transaction.findAll({
            where: { userId },
            attributes: [
                [
                    Sequelize.fn(
                        "SUM",
                        Sequelize.literal(`CASE WHEN type = 'income' THEN value ELSE 0 END`)
                    ),
                    "entries"
                ],
                [
                    Sequelize.fn(
                        "SUM",
                        Sequelize.literal(`CASE WHEN type = 'expense' THEN value ELSE 0 END`)
                    ),
                    "said"
                ]
            ],
            raw: true
        })
    }
}
export default new TransactionRepository()