const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model {};

Item.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }, 
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image: {
        // url string
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'item',
    createdAt: false,
    updatedAt: false
})

module.exports = Item;