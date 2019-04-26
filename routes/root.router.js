const {Router} = require("express");
const db = require('./../db');
const {log} = require('./../utils');
const constants = require('./../constants');

const router = Router();

// logger middleware, log all above or equal to debug level
router.use((req, res, next) => {
    log.debug(log.serializers.req(req));
    next()
});


router.get('/:ifsc', async (req, res) => {
    const { ifsc } = req.params;
    const { rows } = await db.query(`SELECT * FROM ${constants.db.branches} WHERE ifsc = $1`, [ifsc]);
    res.json(rows);
});

// Error handler for all the routes
router.use((e, req, res, next) => {
    log.error(e);

    if (e) return res.status(400).json(e);
    else next();
});

module.exports = router;