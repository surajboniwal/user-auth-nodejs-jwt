class ApiError {
    constructor(code, msg) {
        this.code = code
        this.msg = msg
    }

    static unauthorized(msg) {
        return new ApiError(401, msg || 'Unauthorized')
    }

    static badrequest(msg) {
        return new ApiError(400, msg)
    }

    static notfound(msg) {
        return new ApiError(404, msg)
    }

    static conflict(msg) {
        return new ApiError(409, msg)
    }

    static forbidden(msg) {
        return new ApiError(403, msg || 'Forbidden')
    }
}

module.exports = ApiError