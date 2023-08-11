const router = require('express').Router();

// const indexRoutes = require('./indexRoutes');

// router.use('/index', indexRoutes);

const categoryRoutes = require('./category-routes');

router.use('/category', categoryRoutes);


const userRoutes = require('./users');

router.use('/user', userRoutes)

module.exports = router;