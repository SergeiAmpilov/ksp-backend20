import { Request, Response, Router } from "express";

const articleRouter = Router();

articleRouter.get('/', (req: Request, res: Response): void => {
  res.status(200).send({ page: 'index' });
})

articleRouter.get('/articles', (req: Request, res: Response): void => {
  res.status(200).send({ page: 'articles' });
})

articleRouter.get('/articles/:slug([A-Za-z0-9-]+)', (req: Request, res: Response): void => {
  
  const slug = typeof req.params['slug'] === 'string' ? req.params['slug'] : undefined;

  res.status(200).send({ page: `article with slug ${slug}` });
})


export { articleRouter };