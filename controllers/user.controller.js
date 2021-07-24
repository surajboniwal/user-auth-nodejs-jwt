exports.getDetails = (req, res, next) => {
    return res.json(req.user)
}