"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = exports.userSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const isEmail_1 = __importDefault(require("validator/lib/isEmail"));
exports.userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        minlength: [2, 'Too short Name. Must be at least 2, got {VALUE}'],
        maxlength: [30, 'Too long Name. Must be max 30, got {VALUE}'],
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: [isEmail_1.default, 'Enter correct email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        select: false,
    },
});
exports.userModel = mongoose_1.default.model('user', exports.userSchema);
