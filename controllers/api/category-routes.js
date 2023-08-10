const router = require("express").Router();
const { Category, Item } = require("../../models");

// The `/api/categories` endpoint

// Get all categories from database
router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: Item,
    });

    if (!categoryData) {
      res.status(404).json({ message: "No categories found." });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get specific category from id
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: Item,
    });

    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id." });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new category
router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);

    res
      .status(200)
      .json(`Category ${categoryData.name} has been created.`);
  } catch (err) {
    res.status(500).json(err);
  }
});