const mongoose = require('mongoose');

const dbConnect = async() =>{
    try {
        // takes the url of the mongo dataBase
        await mongoose.connect(process.env.MONGO_URL, {
            //useCreateIndex: true,
            //useFindAndModify: false,
            //useUnifiedTypology: true, 
            //useNewUrlParser: true
        });
        console.log(`Data Base connected successfully !!!`);
    } catch (error) {
        console.log(`Error ! ${error.message}`);

    }
};
module.exports = dbConnect;

// mongo pass IqS9r3uO3EIrNW7X test1
// mongodb+srv://test1:<password>@expensetracker.xkqhels.mongodb.net/?retryWrites=true&w=majority 