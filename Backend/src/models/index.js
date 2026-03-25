import Category from "./Category.js";
import Transaction from "./Transaction.js";
import User from "./User.js";
Transaction.belongsTo(Category, {
    foreignKey: 'CategoryId',
    as: 'category'
})
Category.hasMany(Transaction, {
    foreignKey: 'CategoryId',
    as: 'transaction'
})
User.hasMany(Transaction, {
    foreignKey: 'userId',
    as: 'transactions'
})

Transaction.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
})
export{
    Category,
    Transaction,
    User
}