const { Router } = require('express');
const { createUser, getUser, getAllUserByBusinessId, updateUser, updateUserCoin, deleteUser } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.post('/register/:businessId', createUser);

router.get('/user/:id', /* authenticate, */ getUser);

router.get('/user/business/:id', /* authenticate, */ getAllUserByBusinessId);

router.put('/user/:id/update', /* authenticate, */ updateUser);

router.put('/user/:id/update/coin', /* authenticate, */ updateUserCoin);

router.delete('/user/:id/delete', /* authenticate, */ deleteUser);

module.exports = router;
