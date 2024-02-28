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

module.exports = {registerUser, fetchUsersCntrl};