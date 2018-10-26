'use strict';

const posts = [];

module.exports = {
  all: (ctx, next) => {
    ctx.body = posts;
  },

  one: (ctx, next) => {
    const id = ctx.params.id;
    let foundPost;
    posts.forEach(post => {
      if (post.id === id) {
        foundPost = post;
      }
    });
    ctx.body = foundPost;
  },

  post: (ctx, next) => {
    const post = ctx.request.body;
    posts.push(post);
    ctx.body = post;
  },


  delete: (ctx, next) => {
    const id = ctx.params.id;
    let foundPost;
    posts.forEach(post => {
      if (post.id === id) {
        foundPost = post;
      }
    });
    if (foundPost) {
      posts.splice(posts.indexOf(foundPost), 1);
    }
    ctx.body = foundPost;
  }
}