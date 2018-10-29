import {Container} from 'typedi';
import * as Router from 'koa-router';

export function Delete(route: string) {
  return function(target, propertyKey) {
    const router = Container.get(Router);
    router.del(route, target[propertyKey]());
    console.log('DELETE ', route, target[propertyKey]());
  }
}