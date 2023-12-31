const db = require('../utils/database.js');
const { DataTypes } = require('sequelize');

const Products = db.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'category_id'
  },
  container: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  coinValue: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'coin_value'
  },
  businessId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'business_id'
  }
});

module.exports = Products;
