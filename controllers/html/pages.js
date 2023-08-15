const router = require("express").Router();
const { Item, User, Category, Favorite } = require("../../models");

// Get all listings for home (explore) page
router.get("/", async (req, res) => {
  try {
    const itemData = await Item.findAll({
      include: [User],
    });


    const items = itemData.map((item) => item.get({ plain: true }));

    console.log(items)

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
      const item = itemData.get({ plain: true });
      console.log(item)
      res.render("single-listing", { item, User, loggedIn: req.session.loggedIn });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all posts for homepage
router.get("/", async (req, res) => {
  res.render("all-listings", { loggedIn: req.session.loggedIn });
});

// login page
router.get("/login", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/pending", async (req, res) => {
  res.render("pending");
});

// favorites page
router.get('/favorites', async (req, res) => {
  res.render('favorite', { loggedIn: req.session.loggedIn})
});



// my-listings
router.get('/my-listings', async (req, res) => {
  const userId = req.session.user.id
  console.log(userId)
  const allItems = await Item.findAll({
    where: { user_id: userId}
  });

  const myItems = allItems.map((item) => item.get({ plain: true }))
  console.log(myItems)

  res.render('user-listings', {
    user: req.session.user, myItems, loggedIn: req.session.loggedIn
  })
})

// create listing
router.get("/create", async (req, res) => {
  const allCategories = await Category.findAll();
  let categories = allCategories.map((categories) => {
    return categories.get({ plain: true})
  })
  console.log(categories)
  res.render('create-listing', {loggedIn: req.session.loggedIn, categories})
})


module.exports = router;
