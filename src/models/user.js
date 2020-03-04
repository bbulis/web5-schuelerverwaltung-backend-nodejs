import Sequelize from "sequelize";
import {sequelize} from "../config/database.config";

class User extends Model{

}
User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    schoolclass: {
        type: Sequelize.STRING,
        allowNull: false
    },
    subject: {
        type: Sequelize.STRING,
        allowNull: true
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{
    sequelize,
    modelName: "user"
});

export {User};