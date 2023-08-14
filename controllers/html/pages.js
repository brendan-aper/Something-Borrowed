const router = require("express").Router();
const { Item, User } = require("../../models");

// Get all listings for home (explore) page
router.get("/", async (req, res) => {
  try {
    const itemData = await Item.findAll({
      include: [User],
    });

    console.log(itemData);

    const items = itemData.map((item) => item.get({ plain: true }));

    res.render("all-listings", { items, User, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all listings for home (explore) page
router.get("/explore", async (req, res) => {
  try {
    const itemData = await Item.findAll({
      include: [User],
    });

    console.log(itemData);

    const items = itemData.map((item) => item.get({ plain: true }));

    res.render("all-listings", { items, User, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single listing
router.get("/item/:id", async (req, res) => {
  try {
    const itemData = await Item.findByPk(req.params.id, {
      include: [User],
    });

    if (itemData) {
      const item = itemData.map((item) => item.get({ plain: true }));
      // const item = itemData.get({ plain: true });
      res.render('all-listings', item)
    }} catch (err) 
    {console.error(err)}
  })

// get all posts for homepage
router.get('/', async (req, res) => {
    res.render('all-listings', {loggedIn: req.session.loggedIn})
  })

// login page
router.get("/login", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});


// favorites page
router.get('/favorites', (req, res) => {
  res.render('favorite')
})


// my-listings
router.get('/create', (req, res) => {
  res.render('create-listing')
})
module.exports = router;
