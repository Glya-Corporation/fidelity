const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const UsersBusiness = db.define('users_business', {
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
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  businessId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = UsersBusiness;
