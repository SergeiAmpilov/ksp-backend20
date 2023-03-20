"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagesRouter = void 0;
const express_1 = require("express");
const pagesRouter = (0, express_1.Router)();
exports.pagesRouter = pagesRouter;
pagesRouter.get('/', (req, res) => {
    res.status(200).send({ page: 'index' });
});
pagesRouter.get('/articles', (req, res) => {
    res.status(200).send({ page: 'articles' });
});
pagesRouter.get('/articles/:slug([A-Za-z0-9-])', (req, res) => {
    const slug = typeof req.params['slug'] === 'string' ? req.params['slug'] : undefined;
    console.log(slug);
    res.status(200).send({ page: `article with slug ${slug}` });
});
