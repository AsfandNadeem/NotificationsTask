const { body, param, validationResult } = require('express-validator');
const userModel = require('../models/user.model');

module.exports.loginValidationRules = () => {
    return [
        body('email').isEmail(),
        body('password').isLength({ min: 6 })
    ]
}

module.exports.signUpValidationRules = () => {
    return [
        body('fullName').exists(),
        body('email').isEmail(), //.custom(value => {}),
        body('password').isLength({ min: 6 })
    ]
}

module.exports.addNotificationValidations = () => {
    return [
        body('header').exists(),
        body('body').exists(),
        body('type').exists()
    ]
}

module.exports.deleteNotificationValidation = () => {
    return [
        param('id').exists()
    ]
}


module.exports.editNotificationValidation = () => {
    return [
        param('id').exists(),
        body('header').exists(),
        body('body').exists(),
        body('type').exists()
    ]
}


module.exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }

    var errostring = "";
    errors.array().forEach(element => {
        errostring = errostring + " invalid " + element.param;
    });

    return res.status(401).json({
        success: false,
        message: errostring,
    })
}