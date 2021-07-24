const db = require('../helpers/db.helper')
const User = db.user
const ApiError = require('./../errors/api.error')

exports.getUser = (req, res, next) => {
    db.user.findOne({
        email: req.email
    }).exec((err, user) => {
        if (err) {
            return next(err)
        }

        if (!user) {
            return next(ApiError.badrequest())
        }

        delete req.email
        req.user = user
        next()
    })
}

exports.checkIfEmailExist = async (req, res, next) => {
    User.findOne({
        'email': req.body.email
    }).exec((err, user) => {
        if (err) {
            return next(err)
        }

        if (user) {
            return next(ApiError.conflict('Email already in use'))
        }

        next()
    })
}