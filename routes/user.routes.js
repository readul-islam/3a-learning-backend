const express = require('express');
const { createUser, getUser } = require('../controller/user.controller');

const userRoute = express.Router();

userRoute.post('/registration',createUser)
userRoute.get('/registration',getUser)




module.exports = userRoute;