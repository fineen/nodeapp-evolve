'use strict';

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyParser());

const posts = [];

const router = new Router();
router.get('/posts', (ctx, next) => {
  ctx.body = posts;
});
router.get('/posts/:id', (ctx, next) => {
  const id = ctx.params.id;
  let foundPost;
  posts.forEach(post => {
    if (post.id === id) {
      foundPost = post;
    }
  });
  ctx.body = foundPost;
});
router.post('/posts', (ctx, next) => {
  const post = ctx.request.body;
  posts.push(post);
  ctx.body = post;
});
router.del('/posts/:id', (ctx, next) => {
  const id = ctx.params.id;
  let foundPost;
  posts.forEach(post => {
    if (post.id === id) {
      foundPost = post;
    }
  });
  if (foundPost) {
    posts.splice(posts.indexOf(foundPost), 1);
  }
  ctx.body = foundPost;
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);