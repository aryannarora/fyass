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
    const {ifsc} = req.params;
    const {rows} = await db.query(`SELECT * FROM ${constants.db.branches} WHERE ifsc = $1`, [ifsc.toUpperCase()]);
    res.json(rows);
});

router.get('/:bank/:city', async (req, res) => {
    let {bank, city} = req.params;
    bank = bank.toUpperCase();
    city = city.toUpperCase();
    const {rows} = await db.query(`SELECT * FROM ${constants.db.bank_branches} WHERE bank_name = $1 and city= $2`, [bank, city]);
    res.json(rows);
});

// Error handler for all the routes
router.use((e, req, res, next) => {
    log.error(e);

    if (e) return res.status(400).json(e);
    else next();
});

module.exports = router;