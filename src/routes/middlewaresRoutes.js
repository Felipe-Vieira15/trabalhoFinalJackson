const express = require('express');
const router = express.Router();
const RegisterUser = require('../middlewares/registerMiddleware');

router.post("/", RegisterUser.register);

module.exports = router;