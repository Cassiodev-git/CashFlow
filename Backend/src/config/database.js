import Sequelize from 'sequelize'

export const connection = new Sequelize(process.env.DB_URL, {
    dialect: "mysql",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})