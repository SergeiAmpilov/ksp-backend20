import { Request, Response, Router } from "express";
import { UserController } from "../controllers/User.Controller";

const usersRouter = Router();


usersRouter.post('/user/login', new UserController().loginUser);
usersRouter.post('/user/register', new UserController().createUser );

export { usersRouter };