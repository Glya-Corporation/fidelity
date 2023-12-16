const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Inventory = db.define('inventory', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    defaultValue: 'client'
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  state: {
    type: DataTypes.ENUM('pendiente', 'aceptado', 'rechazado', 'pedido', 'llegó', 'no llegó'),
    defaultValue: 'pendiente'
  },
  businessId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'business_id'
  }
});

module.exports = Inventory;
