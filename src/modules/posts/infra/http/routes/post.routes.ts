import { Router } from 'express';

const postRouter = Router();
import PostController from '../controllers/PostController';

const postController = new PostController();

postRouter.get('/', postController.ListApiPost);
postRouter.post('/', postController.SaveInDataBase);

export default postRouter;
