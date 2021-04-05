const express = require('express');
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

const userRoute = require('../controllers/user.controller');


router.post('/user/register', userRoute.register);
router.post('/user/login', userRoute.login);

router.post('/user/saveNotification', checkAuth, userRoute.createNotification);
router.get('/user/getNotifications', checkAuth, userRoute.getNotifications);
router.delete('/user/deleteNotification/:id', checkAuth, userRoute.deleteNotification);
router.put('/user/editNotification/:id', checkAuth, userRoute.updateNotification);

module.exports = router;