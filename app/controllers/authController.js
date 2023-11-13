const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const MongoDB = require('../utils/mongodb.util')

exports.register = async(req, res) => {
    const {username, password, password_confirm} = req.body;
    if(!username || !password || !password_confirm) {
        res.json({
            status: "bad",
            message: "Username và Password không được để trống"
        })
    }

    if(password !== password_confirm) {
        res.json({
            status: "bad",
            message: "Password không trùng khớp"
        })
    }

    const existUser = await User.findOne({ username });
    if(existUser) {
        res.json({
            status: "bad",
            message: "Username đã tồn tại"
        })
    }

    try {
        hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({username, password:hashedPassword})
        const savedUser = await newUser.save();

        const token = jwt.sign({user: savedUser}, "tokensecret");
        return res.json({
            status: "OK",
            message: "Tài khoản đã tạo thành công!",
            user: saveUser,
            token,
        })
    } catch(error) {
        console.log(error)
        return res.status(500).json({
            status: "bad",
            message: "Đã có lỗi xảy ra"
        });
    }
}

async function login(req, res) {

}

async function logout(req, res) {

}

async function refresh(req, res) {

}

async function user(req, res) {

}
