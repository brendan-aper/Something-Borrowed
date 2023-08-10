const path = require('path');
const express = require('express');
const expbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;

const hbs = expbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server is listening at PORT: ${PORT}`);
});