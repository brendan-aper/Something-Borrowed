const express = require("express");
const { Favorite } = require("../../models");
const router = express.Router();
const savedItems = require('../../utils/saved')

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
// router.post("/", async (req, res) => {
//   console.log(req.body)
//   try {
//   let blogPost_id = Number(req.body.itemId);
//   console.log(blogPost_id)
//   const newFav = await Favorite.create({user_id: req.session.user.id, blogPost_id: blogPost_id});
//   console.log('created' + newFav);
//   res.status(200).json(newFav)
// } catch (err) {
//   console.error(err);
//   res.status(500).json(err)
// }
// })

// ...

// -------------------------------------NEW STUFF WORKS ----------------------------------------------------
// post / send in user ID and post ID
router.post("/", async (req, res) => {
  try {
    const { itemId } = req.body;
    const userId = req.session.user.id;

    // Check if the item is already saved by the user
    const existingFavorite = await Favorite.findOne({
      where: { user_id: userId, blogPost_id: itemId }
    });

    if (existingFavorite) {
      console.log("Item is already saved");
      res.status(409).json({ message: "Item is already saved" });
      return;
    }

    const newFav = await Favorite.create({
      user_id: userId,
      blogPost_id: itemId
    });

    console.log('created', newFav);
    res.status(200).json(newFav);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
// ---------------------------------------------------------------------------------------------------------

// ...
// <-------------------------- NEW STUFF WORKS -------------------------------------------------------->

router.get('/:id', (req, res) => {
  const itemId = req.params.id;
  const isSaved = savedItems.hasItem(itemId);
  res.json({ isSaved });
});
// ------------------------------------------------------------------------------------------------
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

