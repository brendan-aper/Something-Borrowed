const express = require('express');
const { Item } = require('../../models');
const router = express.Router();

// Example in-memory data for item
let item = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  // ... more item
];

// GET all item
router.get('/', (req, res) => {
  res.json(item);
});

// GET a single item by ID
router.get('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = item.find(item => item.id === itemId);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
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
    console.log(`User Deleted`);
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
