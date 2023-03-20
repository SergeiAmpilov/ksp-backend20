import { Request, Response, Router } from "express";


const pagesRouter = Router();

pagesRouter.get('/', (req: Request, res: Response): void => {
  res.status(200).send({ page: 'index' });
})

pagesRouter.get('/articles', (req: Request, res: Response): void => {
  res.status(200).send({ page: 'articles' });
})

pagesRouter.get('/articles/:slug([A-Za-z0-9-])', (req: Request, res: Response): void => {
  
  const slug = typeof req.params['slug'] === 'string' ? req.params['slug'] : undefined;

  console.log(slug);
  res.status(200).send({ page: `article with slug ${slug}` });
})


export { pagesRouter };