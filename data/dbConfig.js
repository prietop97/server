const knex = require('knex');
//const secret = require('../config/secrets')

//const environment = secret.environment || 'development'
const knexConfig = require('../knexfile');

const dbEnv = process.env.DB_ENV || 'development'

module.exports = knex(knexConfig[dbEnv])
