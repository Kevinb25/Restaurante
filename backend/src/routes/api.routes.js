const router = require('express').Router();

router.use('/dishes', require('./api/dishes.routes'))

module.exports = router;