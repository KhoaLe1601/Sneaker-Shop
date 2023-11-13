const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const MongoDB = require('../utils/mongodb.util')

exports.register = async(req, res) => {
    const {username, password, password_confirm} = req.body;
    if(!username || !password || !password_confirm) {
        return res.status(422).json({
            message: "Username hoặc Password không được để trống"
        })
    }
    if(username.length < 4 || username.length > 21) {
        return res.status(400).json({
            message: "Username có độ dài từ 5-20 kí tự"
        })
    }
    if(password.length < 4 || password.length > 21) {
        return res.status(400).json({
            message: "Password có độ dài từ 5-20 kí tự"
        })
    }
    if(password !== password_confirm) {
        return res.status(422).json({
            message: "Password không trùng khớp"
        })
    }

    const existUser = await User.findOne({ username });
    if(existUser) {
        return res.status(409)
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
