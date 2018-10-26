import 'reflect-metadata';
import {Service, Container} from 'typedi';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import {PostsController} from './controllers/posts';

const app = new Koa();
app.use(bodyParser());

const router = new Router();
const posts = Container.get(PostsController);
router.get('/posts', posts.all());
router.get('/posts/:id', posts.one());
router.post('/posts', posts.post());
router.del('/posts/:id', posts.delete());

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);