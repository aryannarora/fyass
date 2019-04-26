const {Pool} = require('pg');

const pool = new Pool({
    connectionString: process.env.connectionString,
});

pool.on('error', (err, client) => console.error('Unexpected error on idle client', err));

module.exports = {
    pool
};