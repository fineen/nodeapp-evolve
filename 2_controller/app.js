'use strict';

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const posts = require('./controllers/posts');

const app = new Koa();
app.use(bodyParser());

const router = new Router();
router.get('/posts', posts.all);
router.get('/posts/:id', posts.one);
router.post('/posts', posts.post);
router.del('/posts/:id', posts.delete);

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);