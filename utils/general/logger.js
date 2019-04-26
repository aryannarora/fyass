/**
 * This file setups a bunyan logger.
 * LOG_LEVEL can be setup in .env file, defaults to info.
 * logs with level Error or above are written in file `PM.log`
 */

const bunyan = require('bunyan');
require('dotenv/config');

// Bunyan logger setup
const log = bunyan.createLogger({
    name: 'App.js',
    serializers: {
        req: bunyan.stdSerializers.req,
        err: bunyan.stdSerializers.err
    },
    streams: [
        {
            level: process.env.LOG_LEVEL || 'info',
            stream: process.stdout
        },
        {
            level: 'error',
            path: './PM.log' // log ERROR and above to a file
        }
    ]
});

module.exports = log;
