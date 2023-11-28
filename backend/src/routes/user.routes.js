const { Router } = require('express');
const { createUser, getUser, getAllUserByUserId, updateUser, deleteUser } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.post('/user/create', authenticate, createUser);

router.get('/user/:id', authenticate, getUser);

router.get('/user/buiness/:id', authenticate, getAllUserByUserId);

router.put('/user/:id/update', authenticate, updateUser);

router.delete('/user/:id/delete', authenticate, deleteUser);

module.exports = router;
