const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    'name': {
        type: String,
        required: true
    },
    'email': {
        type: String,
        required: true
    },
    'password': {
        type: String,
        required: true,
        select: false,
    },
    'refreshToken': {
        type: String,
        required: false,
        default: null,
        select: false
    }
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('User', UserSchema)