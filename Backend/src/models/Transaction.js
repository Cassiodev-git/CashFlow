import { DataTypes } from "sequelize";
import { connection } from "../config/database.js";

const Transaction = connection.define("Transaction", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    type:{
        type: DataTypes.ENUM("income","expense"),
        allowNull: false
    },
    value: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Category',
            key: 'id'
        }
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }

})

export default Transaction