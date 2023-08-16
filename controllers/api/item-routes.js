const express = require("express");
const { Item, User } = require("../../models");
const router = express.Router();

// GET all item
router.get("/", async (req, res) => {
  const allItems = await Item.findAll();
  console.log("found");
  res.json(allItems);
});

// get single listing
router.get("/:id", async (req, res) => {
  try {
    const itemData = await Item.findByPk(req.params.id, {
      include: [User],
    });

    if (!itemData) {
      res.status(404).json({ message: "No item found with that id." });
      return;
    }
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new item
router.post("/", async (req, res) => {
  let itemData = { ...req.body, user_id: req.session.user.id };
  // user ID and post ID passed in from post
  console.log(itemData);
  await Item.create(itemData);
  console.log("Created new item");
  res.status(200).json(itemData);
});


})
// DELETE a item
router.delete("/:id", async (req, res) => {
  const findItem = await Item.destroy({
    where: { id: req.params.id },
  });
  console.log(`Item Deleted`);
  res.json(findItem);
});

// Updating a item
// update post =  successful
router.put("/:id", async (req, res) => {
  try {
    const updateItem = await Item.update(
      {
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        isAvailable: req.body.isAvailable,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    console.log("updated");
    res.json("updated item" + updateItem);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "Not enough information" });
    }
    console.error(err);
    return res
      .status(500)
      .json({ error: "An error occurred while creating a post." });
  }
});

// router.put('/:post_id', (req, res) => {
//   const post_id = parseInt(req.params.post_id);
//   const { title, description } = req.body;

//   // Find the listing by ID
//   const listing = listings.find(item => item.id === post_id);

//   if (!listing) {
//     return res.status(404).json({ error: 'Listing not found' });
//   }

//   // Update the listing
//   listing.title = title;
//   listing.description = description;

//   return res.status(200).json({ message: 'Listing updated successfully', listing });
// });

module.exports = router;
