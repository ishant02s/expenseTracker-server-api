const express = require ('express');
const dbConnect = require('./config/dbConnect');
const { registerUser } = require('./controllers/user/userController');
const userRoute = require("./routes/user/userRoute");
const dotenv = require("dotenv");

const { errorHandler, notFound } = require('./middleware/errorMiddleware');
const incomeRoute = require('./routes/income/incomeRoute');
// environment initializer
dotenv.config();

const app = express();


//dbConnect function called 
dbConnect();

//middleware function to ensure user creates an account to use the application
const logger = (req, res, next)=> {
    console.log("This is the logger");
    next();//the application gets sutck if we do not provide what ot do next in the middleware function
};


app.use(express.json());
//user routes
//app.post('/register',registerUser); //function exported from the userController
app.use("/api/users", userRoute);

//income routes
app.use("/api/income", incomeRoute)

//errors being handled here
//the order in which the errors are being handled aloso matter
//call the error handlers which are more likely to occur first and then less occuring ones
// better being sort them in list on the basis of frequency of occurence
app.use(notFound);
app.use(errorHandler);


module.exports = app;

