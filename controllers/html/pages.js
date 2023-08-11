const router = require('express').Router();


// get all posts for homepage
router.get('/', async (req, res) => {
    res.render('home')
  })

// login page
router.get('/login', async (req, res) => {
  res.render('login')
})

module.exports = router;