const mongoose = require("mongoose")

const userSchema = new mongoose.Schema ({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        min: 4
    },
    refresh_token: String
}, {timestamps: true});

const User = mongoose.model("User", userSchema)
module.exports = User