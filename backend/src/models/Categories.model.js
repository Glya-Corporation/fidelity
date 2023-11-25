const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Categories = db.define('Categories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Categories;
