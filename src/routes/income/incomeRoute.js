//routing using EXPRESS to avoid creating a mess in app.js file
const express = require('express');
const { createIncCtrl, fetchAllIncCtrl, fetchIncDetailCtrl, updateIncCtrl, deleteIncCtrl} = require('../../controllers/income/incomeCtrl');
const authMiddleware = require('../../middleware/authMiddleware');


const incomeRoute = express.Router();
//controller functions are needed to be called here
//endpoints for the website are being created here
incomeRoute.post('/',authMiddleware, createIncCtrl)
incomeRoute.get('/',authMiddleware, fetchAllIncCtrl)
incomeRoute.get('/:id', authMiddleware,fetchIncDetailCtrl)
incomeRoute.put('/:id', authMiddleware,updateIncCtrl)
incomeRoute.delete('/:id', authMiddleware,deleteIncCtrl)


module.exports = incomeRoute; //it is "exports", not "export" NEVER EVER FORGET TO ADD AN 'S' at the end !!