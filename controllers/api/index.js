const router = require("express").Router();

const categoryRoutes = require("./category-routes");
const postRoutes = require("./posts");
const userRoutes = require("./users");

router.use("/category", categoryRoutes);
router.use("/post", postRoutes);
router.use("/user", userRoutes);

module.exports = router;
