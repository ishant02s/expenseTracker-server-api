const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//schema, that is the blueprint of the user model
const userSchema = mongoose.Schema({
    firstname:{
        required:[true, 'Mandatory field*'],
        type: String
    },
    lastname:{
        required:[true, 'Mandatory field*'],
        type: String
    },
    email:{
        required:[true, 'Mandatory field*'],
        type: String
    },
    password:{
        required:[true, 'Mandatory field*'],
        type: String
    },
    isAdmin:{
        type: Boolean,
        default:false
    }
}, {
    timestamp: true,
});

//hashing the password
userSchema.pre('save', async function(next){
    //console.log(this);
    //logic to call only when details are being modified
    if(!this.isModified('password')){ 
        next(); 
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next(); 
})

//verify the password at login 
userSchema.methods.isPasswordMatch = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}
//compile schema into model 
const User = mongoose.model('User' , userSchema);

module.exports = User;
