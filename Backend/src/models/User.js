import { DataTypes } from "sequelize";
import { connection } from "../config/database.js";

const User = connection.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    image:{
        type: DataTypes.STRING,
        allowNull: true
    }, 
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default User
