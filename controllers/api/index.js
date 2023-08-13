const router = require("express").Router();

const categoryRoutes = require("./category-routes");
const itemRoutes = require("./item-routes");
const userRoutes = require("./users");

router.use("/category", categoryRoutes);
router.use("/listing", itemRoutes);
router.use("/user", userRoutes);

module.exports = router;
