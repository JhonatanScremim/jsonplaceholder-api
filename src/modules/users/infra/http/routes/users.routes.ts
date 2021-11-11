import { json, Router } from 'express';

import User from '../../typeorm/entities/User';
import UserService from '../../../services/UserService';
import UserController from '../controllers/UserController';

const userRouter = Router();
const userController = new UserController();

userRouter.get('/', userController.ListApiUsers);

userRouter.post('/post-users', userController.SaveInDataBase);

export default userRouter;
