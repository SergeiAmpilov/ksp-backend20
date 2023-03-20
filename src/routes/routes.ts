import { Router } from "express";
import { articleRouter } from "./article";
import { usersRouter } from "./user";

const pagesRouter = Router();


pagesRouter.use(articleRouter);
pagesRouter.use(usersRouter);


export { pagesRouter };