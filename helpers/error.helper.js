module.exports = (error, req, res, next) => {
    console.error(error);
    return res.status(error.code || 500).json({ errors: [{ msg: error.msg || 'Something went wrong' }] })
}