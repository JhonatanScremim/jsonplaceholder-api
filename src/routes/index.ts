import { Router } from 'express';

const routes = Router();

import userRouter from './users.routes';

routes.use('/users', userRouter);

export default routes;
