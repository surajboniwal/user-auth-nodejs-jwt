exports.getDetails = (req, res, next) => {
    return res.json(req.user)
}

exports.logout = (req, res, next) => {
    req.user.refreshToken = null
    req.user.save()
    return res.sendStatus(200)
}