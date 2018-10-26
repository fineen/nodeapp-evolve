'use strict';
const postService = require('../services/post');

module.exports = {
  all: (ctx, next) => {
    ctx.body = postService.findAll();
  },

  one: (ctx, next) => {
    const id = ctx.params.id;
    ctx.body = postService.findOne(id);
  },

  post: (ctx, next) => {
    const post = ctx.request.body;
    ctx.body = postService.save(post);
  },


  delete: (ctx, next) => {
    const id = ctx.params.id;
    ctx.body = postService.remove(id);
  }
}