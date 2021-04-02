const express = require('express');
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

const userRoute = require('../controllers/user.controller');


router.post('/user/register', userRoute.register);
router.post('/user/login', userRoute.login);

router.post('/user/saveNotification', checkAuth, userRoute.createNotification);

module.exports = router;