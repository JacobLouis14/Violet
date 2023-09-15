const express = require('express');
const router = express.Router();
const {register,login} = require('../controllers/auth');
const { verifyToken } = require('../middleware/verifyToken');
const { getUser } = require('../controllers/user');



/* POST for register */
router.post('/auth/register',register);

/*POST for login */
router.post('/auth/login', login);

/* Get user Details */
router.post('/profile/getprofile', verifyToken, getUser)

module.exports = router;
