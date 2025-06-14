const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');
const AuthMiddleware = require('../middlewares/authMiddleware');

router.use(AuthMiddleware.validateToken);
router.post('/', OrderController.createOrder);
router.get('/', OrderController.listAll);
router.get('/:id', OrderController.findById);
router.put('/:id', OrderController.updateOrder);
router.delete('/:id', OrderController.deleteOrder);

module.exports = router;