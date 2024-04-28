const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const authMiddleware = expressAsyncHandler(async (req, res, next) =>{
    let token;

    if(req?.headers?.authorization?.startsWith('Bearer')){
        token = req?.headers?.authorization?.split(' ')[1];
        console.log("Token", token);
        try {
            if(token){
                const decodedUser = jwt.verify(token, process.env.JWT_KEY);
                //find user dynamically 
                const user = await User.findById(decodedUser?.id);
                console.log(user);
                //attach user to the requested obj
                req.user = user;
                next();
            }
        } catch (error) {
            throw new Error ("User not authorized or TOKEN expired");
        }
    }else{
        throw new Error("No token attached to header");// checks if token is passed in API req or not
    }
});

module.exports = authMiddleware;