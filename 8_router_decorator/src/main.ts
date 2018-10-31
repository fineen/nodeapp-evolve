import 'reflect-metadata';
import { Container } from 'typedi';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
require('./controllers/posts');

const app = new Koa();
app.use(bodyParser());

const router = Container.get(Router);
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
