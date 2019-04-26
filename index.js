const express = require("express");
const bodyParser = require("body-parser");
const {log} = require('./utils');
const router = require('./routes');
const serveStatic = require('serve-static');
const {pool} = require('./db/init');
//initialise app
const app = express();

app.use(serveStatic('public/', {'index': 'readme.md'}));

require('dotenv/config');

// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({
    extended: true
}));

// parse application/json
app.use(bodyParser.json());



app.use('/', router.rootRouter);

// use 3000 if environment variable PORT is not set
const port = process.env.PORT || 3000;

// listen for bad events
process.on('unhandledRejection', (reason, p) => {
    log.error('Unhandled Rejection at: Promise', p, 'reason:', reason)
}).on('uncaughtException', err => {
    log.error(err, 'Uncaught Exception thrown');
});

// make connection request to mongoodb then start the app
return Promise.resolve(pool.connect()
    .then(_ => 'Postgres is setup!')
    .catch(e => log.error(e)))
    .then(_ => app.listen(port, () => log.info(`Server started at port: ${port}`)));
