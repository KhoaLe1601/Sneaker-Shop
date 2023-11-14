const mongoose = require('mongoose')

const refreshTokenSchema = new mongoose.Schema({
    UserId: {
        type: String,
        ref: 'User',
        require: true,
    },
    refreshToken: {
        type: String,
        require: true,
    },
    expiresAt: {
        type: Date,
        require: true,
    }
});

const RefreshToken = mongoose.model('RefreshToken', refreshTokenSchema);
module.exports = RefreshToken;