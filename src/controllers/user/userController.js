const generateToken = require("../../middleware/generateToken");
const User = require("../../model/User");
const expressAsyncHandler = require("express-async-handler");

//Register
//With the use of async handler, all of the following code goes to nothing
const registerUser = expressAsyncHandler(async(req, res)=>{
    const { email, firstname, lastname, password} = req?.body;
    

    const userExists = await User.findOne({email});
    if(userExists) throw new Error ('User Exists by Async Handler');
    try {
        //check if the user exists
        // if(userExists){
        //     res.json("User already exists");
        // }
        const user = await User.create({email, firstname, lastname, password}); 
        res.status(200).json(user);
    } catch (error) {
        res.json(error);
    }
});

//fetch all users
const fetchUsersCntrl = expressAsyncHandler(async (req, res) => {
    try {
        users = await User.find({});
        res.json(users);
    } catch (error) {
        res.json(error);
    }
});

//login functionality for the user
const loginUserCtrl = expressAsyncHandler(async(req, res) => {
    const {email, password} = req?.body
    // res.json("Login !!!"); //tester for route implementation 

    //find the user by email id in the database 
    const userFound = await User.findOne({email});

    //check for password matching
    if(userFound && await userFound?.isPasswordMatch(password)){
        res.json({
            _id: userFound?._id,
            firstname: userFound?.firstname,
            lastname: userFound?.lastname,
            email: userFound?.email,
            isAdmin: userFound?.isAdmin,
            token : generateToken(userFound?._id)
        });
    }
    else{
        res.status(401);
        throw new Error ('Invalid Login Credentials');
    }
});

module.exports = {registerUser, fetchUsersCntrl, loginUserCtrl};