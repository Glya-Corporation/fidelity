const { Users, Categories, Products, Register } = require('./index');

const initModels = () => {
  Users.hasMany(Register, { as: 'register', foreignKey: 'user_id' });
  Register.belongsTo(Users, { as: 'user', foreignKey: 'user_id' });

  Products.hasMany(Register, { as: 'registerlist', foreignKey: 'product_id' });
  Register.belongsTo(Products, { as: 'product', foreignKey: 'product_id' });

  Categories.hasMany(Products, { as: 'products', foreignKey: 'category_id' });
  Products.belongsTo(Categories, { as: 'category', foreignKey: 'category_id' });
};

module.exports = initModels;
