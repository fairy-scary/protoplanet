const config = require('./index');

const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;

module.exports = {
  development: {
    "username": username,
    "password": password,
    "database": database,
    "host": host,
    "dialect": "postgres",
    "seedStorage": "sequelize"
  },

  production: {
    dialect: 'postgres',
    seederStorage:'sequelize',
    use_env_variable: 'DATABASE_URL'
  }

};