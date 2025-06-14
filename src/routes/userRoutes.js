const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userControllers');
const AuthMiddleware = require('../middlewares/authMiddleware');

router.use(AuthMiddleware.validateToken);
router.get('/', UserController.listAll);
router.get('/:id', UserController.findById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;