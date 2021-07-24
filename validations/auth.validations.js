const { body } = require('express-validator');
const { validateRequest } = require('../middlewares/validator.middleware');

module.exports.registrationValidation = [
    body('name').exists({ checkFalsy: true }).withMessage('Name is mandatory'),
    body('email').isEmail().withMessage('Please enter valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password length should be greater than 6 characters'),
    validateRequest,
]

module.exports.loginValidation = [
    body('email').isEmail().withMessage('Please enter valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password length should be greater than 6 characters'),
    validateRequest,
]