const { Router } = require('express');
const { createRegiater, getAllInventoryByBusinessId, updateInventoryStatus, deleteInventory } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

router.post('/inventory', createRegiater);

router.get('/inventory/business/:id', /* authenticate, */ getAllInventoryByBusinessId);

router.put('/inventory/:id/update/status', /* authenticate, */ updateInventoryStatus);

router.delete('/inventory/:id/delete', /* authenticate, */ deleteInventory);

module.exports = router;
