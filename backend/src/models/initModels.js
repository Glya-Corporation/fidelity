const { Users, Categories, Products, Register, Business, Roles } = require('./index');

const initModels = () => {
  Users.hasMany(Register, { as: 'register', foreignKey: 'user_id' });
  Register.belongsTo(Users, { as: 'user', foreignKey: 'user_id' });

  Products.hasMany(Register, { as: 'registerlist', foreignKey: 'product_id' });
  Register.belongsTo(Products, { as: 'product', foreignKey: 'product_id' });

  Categories.hasMany(Products, { as: 'products', foreignKey: 'category_id' });
  Products.belongsTo(Categories, { as: 'category', foreignKey: 'category_id' });

  Users.belongsToMany(Business, { as: 'business', through: 'users_business' });
  Business.belongsToMany(Users, { as: 'users', through: 'users_business' });

  Business.hasMany(Products, { as: 'products', foreignKey: 'business_id' });
  Products.belongsTo(Business, { as: 'owner', foreignKey: 'business_id' });

  Business.hasMany(Categories, { as: 'categories', foreignKey: 'business_id' });
  Categories.belongsTo(Business, { as: 'owner', foreignKey: 'business_id' });

  Roles.hasMany(Users, { as: 'user', foreignKey: 'role_id' });
  Users.belongsTo(Roles, { as: 'role', foreignKey: 'role_id' });
};

module.exports = initModels;
