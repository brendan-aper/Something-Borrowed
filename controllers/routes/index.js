const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

const htmlRoutes = require('./html');

router.use('/', htmlRoutes);

module.exports = router;