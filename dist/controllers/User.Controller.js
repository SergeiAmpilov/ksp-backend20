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
exports.UserController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const { SALT = 10 } = process.env;
class UserController {
    createUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            const passwordHash = yield bcrypt_1.default.hash(user.password, SALT);
            const newUser = yield user_1.userModel.create(Object.assign(Object.assign({}, user), { password: passwordHash }));
            console.log('new user created', newUser);
            res.status(201).send({ user: {
                    email: newUser.email
                } });
        });
    }
}
exports.UserController = UserController;