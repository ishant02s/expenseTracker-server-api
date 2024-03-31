const Income = require("../../model/Income");
const expressAsyncHandler = require("express-async-handler");
const User = require("../../model/User");

//create
const createIncCtrl = expressAsyncHandler(async(req, res) => {
    const {title, amount, description, user} = req.body;
    try {
        const income = await Income.create({
            title,
            amount,
            description,
            user
        });
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

//fetch all income of a user
const fetchAllIncCtrl = expressAsyncHandler(async(req, res) => {
    try {
        const income = await Income.find();
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

//find income by ID
const fetchIncDetailCtrl = expressAsyncHandler(async(req, res) => {
    const {id} = req.params;
    try {
        const income = await Income.findById(id);
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

//update income
const updateIncCtrl = expressAsyncHandler(async(req, res) =>{
    const {id} = req?.params;
    const {title, amount, description} = req.body;
    try {
        const income = await Income.findByIdAndUpdate(id, {
            title, 
            description,
            amount
        }, {new : true});
        res.json(income);
    } catch (error) {
        res.json(error);
    }

});

const deleteIncCtrl = expressAsyncHandler(async(req, res) => {
    const {id} = req.params;
    try {
        const income = await Income.findByIdAndDelete(id);
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});
module.exports = {createIncCtrl, fetchAllIncCtrl, fetchIncDetailCtrl, updateIncCtrl, deleteIncCtrl} 