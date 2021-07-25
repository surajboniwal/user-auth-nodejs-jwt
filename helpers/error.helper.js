module.exports = (error, req, res, next) => {
    console.log(error)
    if (typeof (error.msg) == 'string') {
        error.msg = [{ msg: error.msg }]
    }
    return res.status(error.code || 500).json({ errors: error.msg })
}