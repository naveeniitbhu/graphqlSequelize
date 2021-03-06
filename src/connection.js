import Sequelize from 'sequelize';

const database = 'graphseq';
const username = 'postgres';
const password = 'pspasswd';

const connection = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'postgres'
});

async function checkDBConnection() {
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

checkDBConnection()

export default connection;