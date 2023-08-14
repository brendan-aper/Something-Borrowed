const path = require('path');
const express = require('express');
const session = require('express-session');
const expbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
require('dotenv').config();
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const cloudinary = require('cloudinary').v2;

const app = express();
const PORT = process.env.PORT || 3001;

cloudinary.config({
  cloud_name: 'du1rn35uq',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
})
const hbs = expbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


// Set up cookie session
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
// Use session
app.use(session(sess));

// Use routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening at PORT: ${PORT}`);
})
});