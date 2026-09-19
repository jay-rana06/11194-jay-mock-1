import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : [true , "Email required"],
        lowercase : true,
        trim : true
    },

    salary:{
        type :String,
        required :[true,"salary required"]
    },

    password : {
        type : String,
        required : true,
        select : false,
    },
    
})