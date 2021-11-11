import { Router } from 'express';

const routes = Router();

import userRouter from '../../../../modules/users/infra/http/routes/users.routes';

routes.use('/users', userRouter);

export default routes;
