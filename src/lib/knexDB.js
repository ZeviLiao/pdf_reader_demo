export const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'P@ssw0rd',
        database: 'testDB'
    }
});