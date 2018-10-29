import 'reflect-metadata';
import {Service, Container} from 'typedi';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import {PostsController} from './controllers/posts';

const app = new Koa();
app.use(bodyParser());

const router = Container.get(Router);
const posts = Container.get(PostsController);
// console.log(typeof PostsController); //function
// console.log(typeof posts); //object
// console.log(PostsController); //[Function: PostsController]
// console.log(posts); //PostsController { postService: PostService { posts: [] } }
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);