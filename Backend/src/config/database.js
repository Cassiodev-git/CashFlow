import Sequelize from 'sequelize'

let connection

if (process.env.DB_URL) {
    connection = new Sequelize(process.env.DB_URL, {
        dialect: "mysql",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    })
} else {
    connection = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            dialect: "mysql"
        }
    )
}

export { connection }