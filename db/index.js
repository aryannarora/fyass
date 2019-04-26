const {pool} = require('./init');

module.exports = {
    query: (text, params) => pool.query(text, params)
};