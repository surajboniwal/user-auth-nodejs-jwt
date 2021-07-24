const router = require('express').Router()
const userController = require('../controllers/user.controller')
const profileMiddleware = require('./../middlewares/profile.middleware')
const jwtHelper = require('./../helpers/jwt.helper')

router.get('/', [jwtHelper.verifyAccessToken, profileMiddleware.getUser], userController.getDetails)

module.exports = router