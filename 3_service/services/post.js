'use strict';

const posts = [];

module.exports = {
  findAll: () => {
    return posts;
  },

  findOne: (id) => {
    let foundPost;
    posts.forEach(post => {
      if (post.id === id) {
        foundPost = post;
      }
    });
    return foundPost;
  },

  save: (post) => {
    posts.push(post);
    return post;
  },


  remove: (id) => {
    let foundPost;
    posts.forEach(post => {
      if (post.id === id) {
        foundPost = post;
      }
    });
    if (foundPost) {
      posts.splice(posts.indexOf(foundPost), 1);
    }
    return foundPost;
  }
}