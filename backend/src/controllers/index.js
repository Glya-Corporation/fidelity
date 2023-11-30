const { createUser, getUser, getAllUserByBusinessId, updateUser, deleteUser } = require('./users.controllers.js');
const { createProduct, getProduct, getAllProductByBusinessId, updateProduct, deleteProduct } = require('.products.controllers.js')

module.exports = { createUser, getUser, getAllUserByBusinessId, updateUser, deleteUser, createProduct, getProduct, getAllProductByBusinessId, updateProduct, deleteProduct };
