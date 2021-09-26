const { Router } = require('express');

const OrderController = require('./Controllers/OrderController');
const StatusController = require('./Controllers/StatusController');

const router = Router();

router.get('/orders', OrderController.index);
router.post('/orders', OrderController.store);
router.patch('/orders/:id/status', OrderController.update);

router.get('/status', StatusController.index);
router.post('/status', StatusController.store);

module.exports = router;
