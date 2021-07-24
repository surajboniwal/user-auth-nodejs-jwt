const jwt = require('jsonwebtoken')
const authConfig = require('./../config/auth.config')
const ApiError = require('./../errors/api.error')

exports.buildAccessToken = (email) => jwt.sign({ email: email }, authConfig.jwtSecret, { expiresIn: '24h' })

exports.buildRefreshToken = (email) => jwt.sign({ email: email }, authConfig.refreshSecret)


exports.verifyAccessToken = (req, res, next) => {

    if (!req.headers.authorization) {
        return next(ApiError.unauthorized())
    }

    let token = req.headers.authorization.split(' ')[1]

    jwt.verify(token, authConfig.jwtSecret, (err, data) => {
        if (err) {
            return next(ApiError.unauthorized())
        }

        req.email = data.email
        next()
    })
}

exports.verifyRefreshToken = (req, res, next) => {

    if (!req.headers.authorization) {
        return next(ApiError.unauthorized())
    }

    let token = req.headers.authorization.split(' ')[1]

    jwt.verify(token, authConfig.refreshSecret, (err, data) => {
        if (err) {
            return next(ApiError.unauthorized())
        }

        req.email = data.email
        next()
    })
}