const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'JfTtv42mL',
    host: 'localhost',
    port: 5432,
    database: "app_database"
})

module.exports = pool