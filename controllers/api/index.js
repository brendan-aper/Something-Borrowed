const router = require("express").Router();

const categoryRoutes = require("./category-routes");
const itemRoutes = require("./item-routes");
const userRoutes = require("./user-routes");
const favRoutes = require("./fav-routes");

router.use("/category", categoryRoutes);
router.use("/item", itemRoutes);
router.use("/user", userRoutes);
router.use("/favorite", favRoutes)

module.exports = router;
