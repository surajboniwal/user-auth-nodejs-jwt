const router = require('express').Router()
const authController = require('../controllers/auth.controller')
const profileMiddleware = require('../middlewares/profile.middleware')
const authValidations = require('../validations/auth.validations')
const jwtHelper = require('./../helpers/jwt.helper')

router.post('/register', authValidations.registrationValidation, profileMiddleware.checkIfEmailExist, authController.registration)
router.post('/login', authValidations.loginValidation, authController.login)

router.get('/token', jwtHelper.verifyRefreshToken, authController.token)

module.exports = router