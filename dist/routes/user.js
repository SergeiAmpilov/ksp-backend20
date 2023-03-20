"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
const User_Controller_1 = require("../controllers/User.Controller");
const usersRouter = (0, express_1.Router)();
exports.usersRouter = usersRouter;
usersRouter.post('/user/login', new User_Controller_1.UserController().loginUser);
usersRouter.post('/user/register', new User_Controller_1.UserController().createUser);
