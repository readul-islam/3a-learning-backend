const express = require('express');
const { createUser, getUser } = require('../controller/user.controller');

const userRoute = express.Router();

userRoute.post('/registration',createUser)
userRoute.get('/login',getUser)




module.exports = userRoute;