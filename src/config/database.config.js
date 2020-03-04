import Sequelize from "sequelize";

const database = process.env.DB_DATABASE;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;
const port = process.env.DB_PORT;

const sequelize = new Sequelize(
    database,
    user,
    password,
    {
        port,
        logging: console.log,
        host,
        dialect
    }
);

export {sequelize};