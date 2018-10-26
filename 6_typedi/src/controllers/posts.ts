import {PostService} from '../services/post';

export class PostsController {

  postService: PostService;

  constructor(container) {
    this.postService = container.get(PostService);
  }

  all() {
    return (ctx, next) => {
      ctx.body = this.postService.findAll();
    }
  }

  one() {
    return (ctx, next) => {
      const id = ctx.params.id;
      ctx.body = this.postService.findOne(id);
    }
  }

  post() {
    return (ctx, next) => {
      const post = ctx.request.body;
      ctx.body = this.postService.save(post);
    }
  }

  delete() {
    return (ctx, next) => {
      const id = ctx.params.id;
      ctx.body = this.postService.remove(id);
    }
  }
}
