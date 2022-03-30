// Update with your config settings.
//require('dotenv').config();
module.exports = {


  development: {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 4,
      max: 10
    },
    migrations: {
      directory: './backend/database/migrations'
    }, 
    useNullAsDefault: true,
    debug: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 4,
      max: 10
    },
    migrations: {
      directory: './backend/database/migrations'
    }, 
    useNullAsDefault: true,
  },

};
