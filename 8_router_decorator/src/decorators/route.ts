import { Container } from 'typedi';
import * as Router from 'koa-router';
import { getMeta } from './meta';

function decoratorFactory(method) {
  return function(url) {
    return function(target, methodName) {
      const meta = getMeta(target);
      const router = Container.get(Router);
      const controller = Container.get(target.constructor);

      const routeHandler = (ctx, next) => {
        const args = [];
        for (const { name, index, type } of meta.params[methodName]) {
          switch (type) {
            case 'Req':
              args[index] = ctx.request;
              break;
            case 'Res':
              args[index] = ctx.response;
              break;
            case 'Params':
              args[index] = name ? ctx.params[name] : ctx.params;
              break;
          }
        }
        const handler = controller[methodName].apply(controller, args);
        return handler;
      };

      router[method].apply(router, [url, routeHandler]);
    };
  };
}

export const Get = decoratorFactory('get');
export const Post = decoratorFactory('post');
export const Put = decoratorFactory('put');
export const Delete = decoratorFactory('del');
