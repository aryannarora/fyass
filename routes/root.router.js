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


router.get('/branch', async (req, res, next) => {
    const ifsc = (req.query.ifsc || '').toUpperCase();
    if (ifsc.length === 0) return next(constants.ERRORS.MISSING_IFSC);
    const {rows} = await db.query(`SELECT * FROM ${constants.db.branches} WHERE ifsc = $1`, [ifsc]);
    res.json(rows);
});

router.get('/bank', async (req, res, next) => {
    let {bank_name, city} = req.query;
    bank_name = (bank_name || '').toUpperCase();
    city = (city || '').toUpperCase();

    if (bank_name.length === 0) return next(constants.ERRORS.MISSING_BANK);
    if (city.length === 0) return next(constants.ERRORS.MISSING_CITY);

    const {rows} = await db.query(`SELECT * FROM ${constants.db.bank_branches} WHERE bank_name = $1 and city= $2`, [bank_name, city]);
    res.json(rows);
});

// Error handler for all the routes
router.use((e, req, res, next) => {
    log.error(e);

    if (e) return res.status(400).json(e);
    else next();
});

module.exports = router;