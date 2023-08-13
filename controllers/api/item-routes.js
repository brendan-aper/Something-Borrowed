const express = require('express');
const { Item } = require('../../models');
const router = express.Router();

// GET all item
router.get('/', async (req, res) => {
    const allItems= await Item.findAll();
    console.log("found");
  res.json(allItems);
});

// GET a single item by ID
router.get('/:id', async (req, res) => {
    const singleItem = await Item.findByPk(req.params.id)
    res.json(singleItem)
});

// POST a new item
router.post('/', (req, res) => {
  const newItem = req.body;
  newItem.id = item.length + 1;
  item.push(newItem);
  res.status(201).json(newItem);
});

// DELETE a item
router.delete('/:id', async (req, res) => {
    const finditem = await Item.destroy({ 
        where: {id: req.params.id}});
    console.log(`Item Deleted`);
    res.json(findItem)
})

// Updating a item
// update post =  successful
router.put('/:id', async (req, res) => {
    try {
    const updateItem = await Item.update({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      location: req.body.location
    }, {
      where: {
        id: req.params.id
      }
    })
    console.log('updated');
    res.json('updated item')
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: 'Not enough information' });
    }
    console.error(err);
    return res.status(500).json({ error: 'An error occurred while creating a post.' });
  }})


module.exports = router;
