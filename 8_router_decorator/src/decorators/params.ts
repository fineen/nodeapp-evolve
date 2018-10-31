import { getMeta } from './meta';

function decoratorFactory(type) {
  return function(name?) {
    return function(target, methodName, index) {
      const meta = getMeta(target);

      if (typeof meta.params[methodName] == 'undefined') {
        meta.params[methodName] = [];
      }
      meta.params[methodName].push({ index, type, name });
    };
  };
}

export const Req = decoratorFactory('Req');
export const Res = decoratorFactory('Res');
export const Params = decoratorFactory('Params');
