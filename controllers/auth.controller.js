const db = require('../helpers/db.helper')
const bcrypt = require('bcryptjs')
const ApiError = require('./../errors/api.error')
const jwtHelper = require('./../helpers/jwt.helper')

exports.registration = async (req, res, next) => {
    req.body.password = bcrypt.hashSync(req.body.password, 8)
    const user = db.user(req.body)
    await user.save()
    res.sendStatus(201)
}

exports.login = (req, res, next) => {

    db.user.findOne({
        'email': req.body.email
    }).select('+password +refreshToken').exec((err, user) => {
        if (err) {
            return next(err)
        }
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {

                if (user.refreshToken == null) {
                    user.refreshToken = jwtHelper.buildRefreshToken(user.email)
                    user.save()
                }

                return res.status(200).json({ accessToken: jwtHelper.buildAccessToken(user.email), refreshToken: user.refreshToken })
            }
            return next(ApiError.unauthorized('Invalid credentials'))
        }

        return next(ApiError.forbidden('Invalid credentials'))
    })
}

exports.token = (req, res, next) => {
    res.status(200).json({ accessToken: jwtHelper.buildAccessToken(req.user.email) })
}