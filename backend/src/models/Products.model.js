const db = require('../utils/database.js')

const {DataTypes} = require('sequialize')

const Products = db.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primarykey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  container: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  coinValue: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

module.exports = Products;