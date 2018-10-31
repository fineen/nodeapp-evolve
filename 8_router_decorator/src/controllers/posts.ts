import { Service, Inject } from 'typedi';
import { PostService } from '../services/post';
import { Get, Post, Delete, Req, Res, Params } from '../decorators';

@Service()
export class PostsController {
  //constructor(private postService: PostService) {}
  @Inject()
  postService: PostService;

  @Get('/posts')
  all(@Req() req, @Res() res) {
    res.body = this.postService.findAll();
  }

  @Get('/posts/:id')
  one(@Res() res, @Params('id') id) {
    res.body = this.postService.findOne(id);
  }

  @Post('/posts')
  post(@Req() req, @Res() res) {
    const post = req.body;
    res.body = this.postService.save(post);
  }

  @Delete('/posts/:id')
  delete(@Res() res, @Params('id') id) {
    res.body = this.postService.remove(id);
  }
}
