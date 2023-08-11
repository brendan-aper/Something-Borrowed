const router = require("express").Router();

const indexRoutes = require('./indexRoutes');

// router.use('/index', indexRoutes);

const userRoutes = require('./users');

router.use("/category", categoryRoutes);
router.use("/post", postRoutes);
router.use("/user", userRoutes);

module.exports = router;
