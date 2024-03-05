//routing using EXPRESS to avoid creating a mess in app.js file
const express = require('express');

const {registerUser, fetchUsersCntrl, loginUserCtrl} = require('../../controllers/user/userController');

const userRoute = express.Router();
//controller functions are needed to be called here
//endpoints for the website are being created here
userRoute.post('/register', registerUser);
userRoute.post('/login', loginUserCtrl);
userRoute.get('/', fetchUsersCntrl);

module.exports = userRoute; //it is "exports", not "export" NEVER EVER FORGET TO ADD AN 'S' at the end !!!