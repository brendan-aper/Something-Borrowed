const router = require("express").Router();
const { Item } = require("../../models");

// get all listings for homepage
router.get("/", async (req, res) => {
  res.render("all-listings", { loggedIn: req.session.loggedIn });
});

// get all listings for explore page
router.get("/explore", async (req, res) => {
  res.render("all-listings", { loggedIn: req.session.loggedIn });
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
