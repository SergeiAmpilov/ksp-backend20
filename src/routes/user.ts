import { Request, Response, Router } from "express";

const usersRouter = Router();

usersRouter.post('/user/login', (req: Request, res: Response): void => {
  res.status(201).send({ user: 'login'});
});

usersRouter.post('/user/register', (req: Request, res: Response): void => {
  res.status(201).send({ user: 'register'});
});



export { usersRouter };