const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

//schema, that is the blueprint of the income model
const incomeSchema = mongoose.Schema({
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
        default:"income"
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

//pagination
incomeSchema.plugin(mongoosePaginate);

const Income = mongoose.model("Income", incomeSchema)
module.exports = Income;
