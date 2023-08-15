const express = require("express");
const { Favorite } = require("../../models");
const router = express.Router();

// GET all fav
router.get("/", async (req, res) => {
  try {
    const allFavs = await Favorite.findAll();
    console.log("found");
    res.json(allFavs);
  }  catch (err) {
    res.status(500).json(err);
  
  }});

// post
// send in user ID and post ID
router.post('/', async (req, res) => {
  try {const postFave = await Favorite.create(req.body);
  res.status(200).json(postFave);
  } catch (err) {
      res.status(500).json(err);
  }
})


// post
// send in user ID and post ID
router.delete('/:id', async (req, res) => {
  try { 
    const deleteFav = await Favorite.destroy({
    where: {id: req.params.id}
  });
  res.status(200).json(deleteFav);}  
  
  catch (err) {
    res.status(500).json(err);
}})


module.exports = router;

