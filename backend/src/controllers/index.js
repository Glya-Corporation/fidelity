const { createUser, getUser, getAllUserByBusinessId, updateUser, updateUserCoin, deleteUser } = require('./users.controllers.js');
const { createProduct, getProduct, getAllProductByBusinessId, updateProduct, deleteProduct } = require('./products.controllers.js');
const { createRegiater, getAllInventoryByBusinessId, updateInventoryStatus, deleteInventory } = require('./inventory.controllers.js');

module.exports = { createUser, getUser, getAllUserByBusinessId, updateUser, updateUserCoin, deleteUser, createProduct, getProduct, getAllProductByBusinessId, updateProduct, deleteProduct, createRegiater, getAllInventoryByBusinessId, updateInventoryStatus, deleteInventory };
