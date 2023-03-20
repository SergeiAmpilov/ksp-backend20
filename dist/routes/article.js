"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleRouter = void 0;
const express_1 = require("express");
const articleRouter = (0, express_1.Router)();
exports.articleRouter = articleRouter;
articleRouter.get('/', (req, res) => {
    res.status(200).send({ page: 'index' });
});
articleRouter.get('/articles', (req, res) => {
    res.status(200).send({ page: 'articles' });
});
articleRouter.get('/articles/:slug([A-Za-z0-9-]+)', (req, res) => {
    const slug = typeof req.params['slug'] === 'string' ? req.params['slug'] : undefined;
    res.status(200).send({ page: `article with slug ${slug}` });
});
