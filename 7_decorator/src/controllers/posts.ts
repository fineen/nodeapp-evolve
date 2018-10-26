import {Service} from 'typedi';
import {PostService} from '../services/post';

@Service()
export class PostsController {

  constructor(private postService: PostService) {}

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
