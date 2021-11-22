import { Router } from 'express';

const routes = Router();

import userRouter from '../../../../modules/users/infra/http/routes/users.routes';
import postRouter from '@modules/posts/infra/http/routes/post.routes';

routes.use('/users', userRouter);
routes.use('/post', postRouter);

export default routes;
