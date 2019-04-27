module.exports = {
    db: {
        branches: 'branches',
        banks:'banks',
        bank_branches: 'bank_branches'
    },
    ERRORS: {
        DEFAULT: {message: 'Something is broke'},
        MISSING_IFSC: {message: 'ifsc QUERY PARAM MISSING'},
        MISSING_BANK: {message: 'bank_name QUERY PARAM MISSING'},
        MISSING_CITY: {message: 'city QUERY PARAM MISSING'},
    },
    SUCCESS: {
        DEFAULT: {message: 'Success'}
    }
};