import mongoose from 'mongoose';

// var mongoose = require('mongoose');

// var bcrypt = require('bcrypt');

const addregisterSchema = new mongoose.Schema({
   fname: {
    type: String,
    required: true
   },
   lname:{
    type: String,
    required: true
   },
   email:{
    type: String,
    required: true
   },
   Phone_number:{
    type: String,
    required: true
   },
   password:{
    type: String,
    required: true
   },
   confirm_password:{
    type: String,
    required: true
   },

   role: {
    type: Number,
    default: 0
   }

},
{ timestamps: true }
);

export default mongoose.model("registration", addregisterSchema);