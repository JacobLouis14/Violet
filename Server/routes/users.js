const express = require('express');
const router = express.Router();
const {register,login} = require('../controllers/auth')

/* GET users listing. */
router.get('/auth/signup',register);

module.exports = router;
