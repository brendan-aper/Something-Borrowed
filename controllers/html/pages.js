const router = require('express').Router();


// get all posts for homepage
router.get('/', async (req, res) => {
    res.render('home')
  })

module.exports = router;