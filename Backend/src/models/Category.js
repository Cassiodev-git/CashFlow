import { DataTypes } from "sequelize";
import { connection } from "../config/database.js";

const Category = connection.define("Category", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName: true
})
export default Category