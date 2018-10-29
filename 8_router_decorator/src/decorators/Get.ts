import {Container} from 'typedi';
import * as Router from 'koa-router';

export function Get(route: string) {
  return function(target, propertyKey) {
    const router = Container.get(Router);
    // console.log(target); //PostsController {}
    // console.log(typeof target);//object
    // console.log(target.constructor.name);//PostsController
    const controller = Container.get(target.constructor);
    console.log(controller)
    router.get(route, controller[propertyKey]());
    console.log('GET ', route, target[propertyKey]());
  }
}