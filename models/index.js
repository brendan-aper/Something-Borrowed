const User = require('./User');
const Item = require('./Item');
const Category = require('./Category');
const Favorite = require('./Favorite')

User.hasMany(Item, {
  foreignKey: "user_id",
});

Item.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Category.hasMany(Item, {
  foreignKey: "category_id",
});

Item.belongsTo(Category, {
  foreignKey: "category_id",
});

Item.hasOne(User, {
  foreignKey: "driver_id",
});

User.hasMany(Favorite, {
    foreignKey: 'user_id'
})

Favorite.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = { User, Item, Category, Favorite }

module.exports = { User, Item, Category };
