const { validationResult } = require('express-validator')
const ApiError = require('../errors/api.error')

module.exports.validateRequest = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return next(ApiError.badrequest(errors.errors))
    }
    next()
}