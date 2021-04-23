import { Sequelize, DataTypes} from 'sequelize';
import connection from '../../connection';

const user = connection.define('user', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING
    },
});

user.sync()

export default user;
