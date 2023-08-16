const router = require("express").Router();
const { Item, User, Category, Favorite } = require("../../models");

// Get all listings for home (explore) page
router.get("/", async (req, res) => {
  try {
    const itemData = await Item.findAll({
      include: [User],
    });

    const items = itemData.map((item) => item.get({ plain: true }));

    console.log(items);

    res.render("all-listings", {
      items,
      User,
      Category,
      loggedIn: req.session.loggedIn,
    });
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

      console.log(item);
      res.render("single-listing", {
        item,
        User,
        loggedIn: req.session.loggedIn,
      });
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

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/pending", async (req, res) => {
  res.render("pending", { loggedIn: req.session.loggedIn });
});

// favorites page
router.get("/favorites", async (req, res) => {
  const user = req.session.user.id;
  const favorites = await Favorite.findAll({
    where: {
      user_id: user,
    },
  });

  // find all favs for that user
  const favs = favorites.map((fav) => fav.get({ plain: true }));
  console.log(favs);

  // loop through favs to find blogPosts

  let itemArray = [];
  favs.forEach(async (element) => {
    let findItem = await Item.findOne({
      where: {
        id: element.blogPost_id,
      },
    });
    let item = findItem.get({ plain: true });
    itemArray.push(item);
    console.log(itemArray);
  });

  res.render("favorite", { itemArray, loggedIn: req.session.loggedIn });
});

// my-listings
router.get("/my-listings", async (req, res) => {
  const userId = req.session.user.id;
  console.log(userId);
  const allItems = await Item.findAll({
    where: { user_id: userId },
  });

  const myItems = allItems.map((item) => item.get({ plain: true }));
  console.log(myItems);

  res.render("user-listings", {
    user: req.session.user,
    myItems,
    loggedIn: req.session.loggedIn,
  });
});

router.get("/edit-listing/:id", async (req, res) => {
  const itemId = req.params.id;

  try {
    const allItems = await Item.findByPk(itemId);
    if (!allItems) {
      // Handle listing not found
      return res.redirect("/my-listings");
    } else {
      const editItem = allItems.get({ plain: true });
      res.render("edit-listing", {
        loggedIn: req.session.loggedIn,
        itemId,
        editItem,
      });
    }
  } catch (error) {
    // Handle errors
    console.error(error);
    res.redirect("/my-listings");
  }
});

// create listing
router.get("/create", async (req, res) => {
  const allCategories = await Category.findAll();
  let categories = allCategories.map((categories) => {
    return categories.get({ plain: true });
  });
  console.log(categories);
  res.render("create-listing", { loggedIn: req.session.loggedIn, categories });
});

// Render categories per :id
router.get("/category/:id", async (req, res) => {
  const allItems = await Item.findAll({
    include: Category,
    where: { category_id: req.params.id },
  });

  const catItems = allItems.map((item) => item.get({ plain: true }));

  res.render("all-listings", {
    category_id: req.params.id,
    catItems,
    loggedIn: req.session.loggedIn,
  });
});


module.exports = router;
