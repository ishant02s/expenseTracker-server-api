//routing using EXPRESS to avoid creating a mess in app.js file
const express = require('express');
const { createIncCtrl, fetchAllIncCtrl, fetchIncDetailCtrl, updateIncCtrl, deleteIncCtrl} = require('../../controllers/income/incomeCtrl');
const { fetchUsersCntrl } = require('../../controllers/user/userController');


const incomeRoute = express.Router();
//controller functions are needed to be called here
//endpoints for the website are being created here
incomeRoute.post('/', createIncCtrl)
incomeRoute.get('/', fetchAllIncCtrl)
incomeRoute.get('/:id', fetchIncDetailCtrl)
incomeRoute.put('/:id', updateIncCtrl)
incomeRoute.delete('/:id', deleteIncCtrl)


module.exports = incomeRoute; //it is "exports", not "export" NEVER EVER FORGET TO ADD AN 'S' at the end !!