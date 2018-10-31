import { Service } from 'typedi';

@Service()
export class PostService {
  posts: any;

  constructor() {
    this.posts = [];
  }

  findAll() {
    return this.posts;
  }

  findOne(id) {
    let foundPost;
    this.posts.forEach(post => {
      if (post.id === id) {
        foundPost = post;
      }
    });
    return foundPost;
  }

  save(post) {
    this.posts.push(post);
    return post;
  }

  remove(id) {
    let foundPost;
    this.posts.forEach(post => {
      if (post.id === id) {
        foundPost = post;
      }
    });
    if (foundPost) {
      this.posts.splice(this.posts.indexOf(foundPost), 1);
    }
    return foundPost;
  }
}
