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

// post / send in user ID and post ID
router.post("/", async (req, res) => {
  console.log(req.body)
  try {
  let blogPost_id = Number(req.body.itemId);
  const newFav = await Favorite.create({
    user_id: req.session.user.id, 
    blogPost_id: blogPost_id
  });

  console.log('created' + newFav);
  res.status(200).json(newFav)
} catch (err) {
  console.error(err);
  res.status(500).json(err)
}
})


// post
// send in user ID and post ID
router.delete('/:id', async (req, res) => {
  try { 
    const deleteFav = await Favorite.destroy({
    where: {blogPost_id: req.params.id}
  });
  res.status(200).json(`deleted ${deleteFav}`);}  
  
  catch (err) {
    res.status(500).json(err);
}})


module.exports = router;

