const express = require("express")
const ApiError = require("./app/api-error")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const userRouter = require('./app/routers/userRoute')
const productRouter = require('./app/routers/productRouter')

app.use(cors({origin:'https://localhost:3001'}))
app.use(express.json())

//gui du lieu tu server
app.use("/sneakershop/auth", userRouter)
//app.use("sneakershop/product", productRouter)

app.use((req, res, next) => {
    return next( new ApiError(404, "Resource not found"))
});
app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    })
});
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
});
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Sneaker Shop"})
});

module.exports = app;
