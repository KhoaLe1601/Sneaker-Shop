const ApiError = require("../api-error")
const MongoDB = require("../utils/mongodb.util")
const User = require("../models/User")
const brcypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.register = async(req, res) => {
        //Đọc dữ liệu username và password từ request body
        const {username, password } = req.body;

        //Kiểm tra username và password không được trống
        if(!username || !password) {
            res.json({
                status: "bad",
                message: "Username và Password không được để trống"
            })
        }
        //Kiểm tra độ dài của chuỗi username và password
        if(username.length < 4) {
            return res.json({
                status: "bad",
                message: "Username có ít nhất 5 kí tự",
            });
        }

        if(username.length > 20) {
            return res.json({
                status: "bad",
                message: "Username không được chứa nhiều hơn 20 kí tự",
            });
        }

        if(password.length < 4) {
            return res.json({
                status: "bad",
                message: "Password không được ít hơn 4 kí tự",
            });
        }

        if(password.length > 20) {
            return res.json({
                status: "bad",
                message: "Password không được quá 20 kí tự"
            });
        }
        //Kiểm tra username đã tồn tại chưa
        const existUser = await User.findOne({ username });
        if(existUser) {
            return res.json({
                status: "bad",
                message: "Username đã tồn tại",
            });
        }
        try{
            //Băm mật khẩu
            const hashedPass = await brcypt.hash(password, 10);
            //Tạo user mới
            const newUser = new User({
                username,
                password: hashedPass,
            });
            //Lưu user mới tạo vào csdl
            const saveUser = await newUser.save();
            //Tạo jwt token
            const token = jwt.sign({user: saveUser}, "tokensecret");
            //Trả về response
            res.json({
                status: "OK",
                message: "Tài khoản đã tạo thành công!",
                user: saveUser,
                token,
            });
        } catch(error) {
            console.log(error.message);
        }
}