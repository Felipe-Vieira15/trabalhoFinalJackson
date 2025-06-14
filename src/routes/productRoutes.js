const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');
const AuthMiddleware = require('../middlewares/authMiddleware');

router.use(AuthMiddleware.validateToken);
router.post('/', ProductController.createProduct);
router.get('/', ProductController.listAll);
router.get('/:id', ProductController.findById);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;