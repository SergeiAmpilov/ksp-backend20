import mongoose from "mongoose";
import isEmail from 'validator/lib/isEmail';


export const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, 'Too short Name. Must be at least 2, got {VALUE}'],
    maxlength: [30, 'Too long Name. Must be max 30, got {VALUE}'],
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: [isEmail, 'Enter correct email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false,
  },
});

export const userModel = mongoose.model('user', userSchema);
