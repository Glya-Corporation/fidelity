const { Router } = require('express');
const { createRegister, getAllInventaryByBusinessId, updateInventaryStatus, deleteInventary } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.post('/inventary', createRegister);

router.get('/inventary/business/:id', /* authenticate, */ getAllInventaryByBusinessId);

router.put('/inventary/:id/update/status', /* authenticate, */ updateInventaryStatus);

router.delete('/inventary/:id/delete', /* authenticate, */ deleteInventary);

module.exports = router;
