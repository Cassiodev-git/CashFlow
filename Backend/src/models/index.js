import Category from "./Category.js";
import Transaction from "./Transaction.js";

Transaction.belongsTo(Category, {
    foreignKey: 'CategoryId',
    as: 'category'
})
Category.hasMany(Transaction, {
    foreignKey: 'CategoryId',
    as: 'transaction'
})
export{
    Category,
    Transaction
}