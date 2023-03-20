"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pagesRouter = void 0;
const express_1 = require("express");
const article_1 = require("./article");
const pagesRouter = (0, express_1.Router)();
exports.pagesRouter = pagesRouter;
pagesRouter.use(article_1.articleRouter);
