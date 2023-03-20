import { Request, Response, Router } from "express";
import { UserController } from "../controllers/User.Controller";

const usersRouter = Router();


usersRouter.post('/user/login', (req: Request, res: Response): void => {
  res.status(201).send({ user: 'login'});
});

usersRouter.post('/user/register', new UserController().createUser );

export { usersRouter };