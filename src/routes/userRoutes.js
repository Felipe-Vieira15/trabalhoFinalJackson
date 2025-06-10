const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userControllers');

router.get('/', UserController.listUsers);
router.get('/:id', UserController.findById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;