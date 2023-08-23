import mongoose from "mongoose";

var registerschema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    answer: { type: String, required: true }
});

export const Registermodel = mongoose.model('register', registerschema)