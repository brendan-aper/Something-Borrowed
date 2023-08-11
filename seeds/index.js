const sequelize = require('../config/connection');
// import models
const { User, Category, Item } = require('../models');

const userData = [
    { first_name: 'Merel', email: 'mimibanini@gmail.com', password: 'helloKitty', location: '97209',
    }
];

const categoryData = [
    { name: 'Camping' }
];

const itemData = [
    { title: 'Tent', description: 'Large blue tent. Sleeps 4 people.', price: '10', location: '97209', category_id: '1', user_id: '1'}
]


  async function seedDatabase() {
    try {
        await sequelize.sync({ force: true });

        await User.bulkCreate(userData);

        await Category.bulkCreate(categoryData);

        await Item.bulkCreate(itemData);

        console.log(`Seed database successfully created.`)
    } catch(err) {
        console.error(`Error sending seed: ${err}`)
    }
  };

  seedDatabase();