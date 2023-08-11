const router = require('express').Router();

// const indexRoutes = require('./indexRoutes');

// router.use('/index', indexRoutes);
const postRoutes = require('./posts');
router.use('/post', postRoutes)
const userRoutes = require('./users');

router.use('/user', userRoutes)

module.exports = router;