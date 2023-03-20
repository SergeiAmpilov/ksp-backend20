"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = exports.userSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const isEmail_1 = __importDefault(require("validator/lib/isEmail"));
const userSchema = new mongoose_1.default.Schema({
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
exports.userSchema = userSchema;
userSchema.statics.findByEmail = function (email) {
    return __awaiter(this, void 0, void 0, function* () {
        const userFromDb = yield this.findOne({ email }).select('+password');
        return userFromDb;
    });
};
const userModel = mongoose_1.default.model('user', userSchema);
exports.userModel = userModel;
