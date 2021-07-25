const router = require('express').Router()
const profileController = require('../controllers/profile.controller')
const profileMiddleware = require('./../middlewares/profile.middleware')
const jwtHelper = require('./../helpers/jwt.helper')

router.get('/', [jwtHelper.verifyAccessToken, profileMiddleware.getUser], profileController.getDetails)
router.get('/logout', [jwtHelper.verifyAccessToken, profileMiddleware.getUser], profileController.logout)

module.exports = router