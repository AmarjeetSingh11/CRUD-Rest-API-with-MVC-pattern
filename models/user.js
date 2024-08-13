const mongoose = require('mongoose');

//Schema of the MongoDb Database
const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
    },
    last_name:{
        type: String,
        required: false,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    job_title:{
        type:String,
        required: true,
    },
    gender:{
        type: String,
        required: false,
    }
},{timestamps:true})

//Modle Creation
const User = mongoose.model('user',userSchema);
module.exports = User;