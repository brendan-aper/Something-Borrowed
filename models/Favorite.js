const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorite extends Model {}

Favorite.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    blogPost_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }


}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorite'
});

module.exports = Favorite;