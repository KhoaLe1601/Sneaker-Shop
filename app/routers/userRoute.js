const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authController");

router.route('/register')
    .post(authControllers.register)

router.route('/login')
    .post(authControllers.login)

// router.post('/logout', authControllers.logout)

// router.post('/refresh', authControllers.refresh)

// router.post('/user', authControllers.user)

module.exports = router;
