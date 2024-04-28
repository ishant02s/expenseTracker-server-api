//routing using EXPRESS to avoid creating a mess in app.js file
const express = require('express');
const { createExpCtrl, fetchAllExpCtrl, fetchExpDetailCtrl, updateExpCtrl, deleteExpCtrl} = require('../../controllers/expense/expenseCtrl');
const authMiddleware = require('../../middleware/authMiddleware');


const expenseRoute = express.Router();
//controller functions are needed to be called here
//endpoints for the website are being created here
expenseRoute.post('/', createExpCtrl)
expenseRoute.get('/',  fetchAllExpCtrl)
expenseRoute.get('/:id',  fetchExpDetailCtrl)
expenseRoute.put('/:id',  updateExpCtrl)
expenseRoute.delete('/:id',  deleteExpCtrl)


module.exports = expenseRoute //it is "exports", not "export" NEVER EVER FORGET TO ADD AN 'S' at the end !!