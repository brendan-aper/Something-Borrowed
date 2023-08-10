const router = require('express').Router();
const { User } = require('../../models')


router.get('/', async (req, res) => {
    const allUsers = await User.findAll();
    console.log('found them!');
    res.json(allUsers)
})

// router.get('/new', (req, res) => {
//     res.send('User New Form')
// })

// router.post('/', (req, res) => {
//     res.send('Create User')
// })

// router.get('/:id', (req, res) => {
//     req.params.id
//     res.send(`Get User WIth ID ${req.params.id}`)
// })


module.exports = router;