const path = require('path');
const express = require('express');
const session = require('express-session')
const expbs = require('express-handlebars');
const routes = require('./controllers')
const sequelize = require('./config/connection')


const app = express();
const PORT = process.env.PORT || 3001;

const hbs = expbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(session({
  secret: 'secret secret',
  cookie: { maxAge: 3000},
  resave: true,
  saveUninitialized: false
}));


app.get('/', (req, res) => {
  res.render('home');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes)


sequelize.sync
app.listen(PORT, () => {
  console.log(`Server is listening at PORT: ${PORT}`);
});