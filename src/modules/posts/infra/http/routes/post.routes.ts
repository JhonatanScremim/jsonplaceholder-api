import { Router } from 'express';

const postRouter = Router();
import PostController from '../controllers/PostController';

const postController = new PostController();

postRouter.get('/', postController.ListApiPost);

export default postRouter;
