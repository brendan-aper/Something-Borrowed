const router = require("express").Router();
const { Item, User } = require("../../models");

// get all listings for home (explore) page
// router.get("/", async (req, res) => {
//   res.render("all-listings", { loggedIn: req.session.loggedIn });
// });

// Get all listings for home (explore) page
router.get("/", async (req, res) => {
  try {
    const itemData = await Item.findAll({
      include: [User],
    });

    console.log(itemData);

    const items = itemData.map((item) => item.get({ plain: true }));

    res.render("all-listings", { items, User });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single listing
router.get("/item/:id", async (req, res) => {
  try {
    const itemData = await Item.findByPk(req.params.id);

    if (itemData) {
      const listing = itemData.get({ plain: true });

      res.render("single-listing", { listing });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// login page
router.get("/login", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// signup page
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});
module.exports = router;
