const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const AccessToken = require('../models/accessToken');
const RefreshToken = require('../models/refreshToken');

//Đăng kí user 
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
    const existUser = await User.findOne({username});
    if(existUser) {
        return res.status(409).json({
            message: "Người dùng đã tồn tại"
        })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    //Tạo refreshToken
    // const refreshToken = jwt.sign({
    //     userId: user._id
    // }, 'refreshsecret', {expiresIn: '1d'});
    //Tạo một user mới
    const newUser = await new User({
        username: username, 
        password:hashedPassword,
        //refresh_token: refreshToken,
    })
    try {
        //Lưu user vào csdl
        const savedUser = await newUser.save();
        res.status(201).json({
            message: "Tài khoản đã tạo thành công!",
            user: savedUser,
        });
    } catch(error) {
        console.log(error);
        return res.status(400);
    }
}

//Đăng nhập
exports.login = async(req, res) => {
    const {username, password} = req.body

    try {
        if(!username || !password) {
            return res.status(422).json({
                message: "Username hoặc Password không được để trống"
            })
        }
    
        const userCheck = await User.findOne({username})
        if(!userCheck) {
            return res.status(401).json({
                message: "Username không tồn tại"
            });
        }
        
        const match = await bcrypt.compare(password, userCheck.password)
        if(!match) {
            return res.status(401).json({
                message: "Password không đúng"
            })
        }
        //Tạo accessToken và refreshToken
        const accessToken = jwt.sign({
            userId: userCheck.username
        }, 'tokensecret', {expiresIn: '1h'});
        const refreshToken1 = jwt.sign({
            userId: userCheck.username
        }, 'refreshsecret', {expiresIn: '1d'});

        userCheck.refresh_token = refreshToken1;
        await userCheck.save();
        res.cookie('refresh_token', refreshToken1, {httpOnly: true, maxAge: 24*60*60*1000})

        // Lưu access Token vào csdl
        const accessTokenModel = new AccessToken({
            userId: userCheck.username,
            token: accessToken,
            expiresAt: new Date(Date.now() + 1 * 3600 * 1000),
        });
        await accessTokenModel.save();

        //Lưu refresh Token vào csdl
        const refreshTokenModel = new RefreshToken({
            userId: userCheck.username,
            refreshToken: refreshToken1,
            expiresAt: new Date(Date.now() + 7 * 24 * 3600 * 1000),
        });
        await refreshTokenModel.save();
        res.status(200).json({
            accessToken,
            refreshToken1,
        });
    } catch(error) {
        console.log(error);
        res.status(500);
    }
}

async function logout(req, res) {

}

async function refresh(req, res) {

}

async function user(req, res) {

}
