import { Router } from "express";
import { articleRouter } from "./article";

const pagesRouter = Router();


pagesRouter.use(articleRouter);


export { pagesRouter };