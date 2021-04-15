const express = require('express');
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const validations = require("../middleware/validations");

const userRoute = require('../controllers/user.controller');


router.post('/user/register', validations.signUpValidationRules(), validations.validate, userRoute.register);
router.post('/user/login', validations.loginValidationRules(), validations.validate, userRoute.login);

router.post('/user/Notification', checkAuth, validations.addNotificationValidations(), validations.validate, userRoute.createNotification);
router.get('/user/Notification', checkAuth, userRoute.getNotifications);
router.delete('/user/Notification/:id', checkAuth, validations.deleteNotificationValidation(), validations.validate, userRoute.deleteNotification);
router.put('/user/Notification/:id', checkAuth, validations.editNotificationValidation(), validations.validate, userRoute.updateNotification);

module.exports = router;