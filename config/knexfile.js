const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env')});


const BASE_PATH = path.join(__dirname, '..', 'app', 'managers', 'db');

module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: 'localhost',
            user: 'root',
            password: `${process.env.DB_PASS}`,
            database: 'schedule',
            filename: '../app/managers/initDb.sql'
        },
        migrations: {
            directory: path.join(BASE_PATH, 'migrations')
        },
        seeds: {
            directory: path.join(BASE_PATH, 'seeds')
        }
    }
};
