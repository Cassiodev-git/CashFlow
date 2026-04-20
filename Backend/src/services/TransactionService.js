import AppError from "../utils/AppError.js";
import TransactionRepository from "../repository/TransactionRepository.js";
import Transaction from "../models/Transaction.js";
import { Sequelize } from "sequelize";

class TransactionService {
    async listId(id){
        const transaction = await TransactionRepository.listId(id)
        if(!transaction){
            throw new AppError("Transação não encontrada", 404)
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
        const result = await Transaction.findAll({
          where: { userId: id },
          attributes: [
            [
              Sequelize.fn('SUM',
                Sequelize.literal(`CASE WHEN type = 'income' THEN value ELSE 0 END`)
              ),
              'entries'
            ],
            [
              Sequelize.fn('SUM',
                Sequelize.literal(`CASE WHEN type = 'expense' THEN value ELSE 0 END`)
              ),
              'said'
            ]
          ],
          raw: true
        });

        const { entries = 0, said = 0 } = result[0] || {};
        const sale = parseFloat(entries) - parseFloat(said);

        return { entries, said, sale };
    }
}
export default new TransactionService()