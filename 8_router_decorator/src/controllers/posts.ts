import {Service} from 'typedi';
import {PostService} from '../services/post';
import {Controller, Get, Post, Delete} from '../decorators';

@Service()
export class PostsController {

  constructor(private postService: PostService) {}

  @Get('/posts')
  all() {
    return (ctx, next) => {
      ctx.body = this.postService.findAll();
    }
  }

  @Get('/posts/:id')
  one() {
    return (ctx, next) => {
      const id = ctx.params.id;
      ctx.body = this.postService.findOne(id);
    }
  }

  @Post('/posts')
  post() {
    return (ctx, next) => {
      const post = ctx.request.body;
      ctx.body = this.postService.save(post);
    }
  }

  @Delete('/posts/:id')
  delete() {
    return (ctx, next) => {
      const id = ctx.params.id;
      ctx.body = this.postService.remove(id);
    }
  }
}
