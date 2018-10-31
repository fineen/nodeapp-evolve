export function getMeta(target) {
  if (!target.__meta__) {
    target.__meta__ = {
      routes: {},
      params: {},
    };
  }
  return target.__meta__;
}
