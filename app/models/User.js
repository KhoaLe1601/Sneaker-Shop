const mongoose = require("mongoose")

const userSchema = new mongoose.Schema ({
    username: {
        type: String,
        require: 'Please enter your username',
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: 'Please enter your password',
        min: 4
    },
    refresh_token:String,
}, {timestamps: true});
const User = mongoose.model("User", userSchema)
module.exports = User;