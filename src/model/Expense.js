const mongoose = require('mongoose');

//schema, that is the blueprint of the income model
const expenseSchema = mongoose.Schema({
    title:{
        required:[true, 'Mandatory field*'],
        type: String
    },
    description:{
        required:[true, 'Mandatory field*'],
        type: String
    },
    type:{
        type: String,
        default:"expense"
    },
    amount:{
        required:[true, 'Mandatory field*'],
        type: Number
    },
    user:{
        type: mongoose.Schema.Types.ObjectId, //Gets the unique ID of the user from the database
        ref:'User',
        required: [true, "ID is mandatory"]
    }

}, {
    timestamp: true,
});

const Expense = mongoose.model("Expense", expenseSchema)
module.exports = Expense;