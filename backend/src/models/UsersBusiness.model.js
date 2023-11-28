const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const UsersBusiness = db.define('users_business', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id'
  },
  businessId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'business_id'
  },
  coin: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

module.exports = UsersBusiness;
