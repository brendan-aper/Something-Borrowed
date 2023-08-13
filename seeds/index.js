const sequelize = require("../config/connection");
// import models
const { User, Category, Item } = require("../models");

const userData = [
  {
    first_name: "Merel",
    email: "mimibanini@gmail.com",
    password: "helloKitty",
    location: "97209",
  },
];

const categoryData = [
  { name: "Camping" },
  { name: "Household" },
  { name: "Yard" },
  { name: "Kitchen" },
  { name: "Games" },
];

const itemData = [
  {
    title: "Tent",
    description: "Large blue tent. Sleeps 4 people.",
    location: "97209",
    category_id: "1",
    user_id: "1",
    image:
      "https://images.unsplash.com/photo-1550957886-ac45931e5779?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
];

async function seedDatabase() {
  try {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData);

    await Category.bulkCreate(categoryData);

    await Item.bulkCreate(itemData);

    console.log(`Seed database successfully created.`);
  } catch (err) {
    console.error(`Error sending seed: ${err}`);
  }
}

seedDatabase();
