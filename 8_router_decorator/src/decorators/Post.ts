import {Container} from 'typedi';
import * as Router from 'koa-router';

export function Post(route: string) {
  return function(target, propertyKey) {
    const router = Container.get(Router);
    router.post(route, target[propertyKey]());
    console.log('POST ', route, target[propertyKey]());
  }
}