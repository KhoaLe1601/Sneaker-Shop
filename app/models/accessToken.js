const mongoose = require('mongoose')

const accessTokenSchema = new mongoose.Schema({
    userId: {
        type: String,
        ref: 'User',
        require: true,
    },
    token: {
        type: String,
        require: true,
    },
    expiresAt: {
        type: Date,
        require: true,
    },
});

const AccessToken = mongoose.model('AccessToken', accessTokenSchema);

module.exports = AccessToken;