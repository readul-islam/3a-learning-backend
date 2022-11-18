const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:[20,'Maximum length 20']
    },
    email:{
        type:String,
        required:true,
        unique:[true,'Email already exist' ]
    },
    password:{
        type:String,
        required:true,
        minLength:[5,'Minimum length 5']
    }
})


module.exports= mongoose.model('user', userSchema)