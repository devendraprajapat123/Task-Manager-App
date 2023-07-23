import mongoose from "mongoose";

const registerschema = new mongoose.Schema({
    name:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
});

export const Registermodel = mongoose.model('register',registerschema)