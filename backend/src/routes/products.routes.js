const { Router } = require('express');
const { createProduct, getProduct, getAllProductByBusinessId, updateProduct, deleteProduct } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.post('/product/create', /* authenticate, */ createProduct);

router.get('/product/:id', /* authenticate, */ getProduct);

router.get('/product/buiness/:id', /* authenticate, */ getAllProductByBusinessId);

router.put('/product/:id/update', /* authenticate, */ updateProduct);

router.delete('/product/:id/delete', /* authenticate, */ deleteProduct);

module.exports = router;
