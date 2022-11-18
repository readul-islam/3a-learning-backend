const express = require('express');
const userRoute = require('./user.routes');
const appRoute = express.Router();
appRoute.use('/user',userRoute)





module.exports= appRoute;