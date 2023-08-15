const sequelize = require("../config/connection");
// import models
const { User, Category, Item, Favorite } = require("../models");

const userData = [
  {
    first_name: "Merel",
    email: "mimibanini@gmail.com",
    password: "helloKitty",
    location: "97209",
  },
  {
    first_name: "Michie",
    email: "contact@michiewillman.com",
    password: "stuffandthings",
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

const favData = [
  {
    user_id: 1,
    blogPost_id: 1
  }
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
  {
    title: "Weed wacker",
    description:
      "Rent to wack your weeds! You only use these once in a while, anyway.",
    location: "97209",
    category_id: "2",
    user_id: "1",
    image:
      "https://images.unsplash.com/photo-1600540520314-cbc1ddc91f3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
];

async function seedDatabase() {
  try {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData);

    await Category.bulkCreate(categoryData);

    await Item.bulkCreate(itemData);

    await Favorite.bulkCreate(favData)

    console.log(`Seed database successfully created.`);
  } catch (err) {
    console.error(`Error sending seed: ${err}`);
  }
}

seedDatabase();
