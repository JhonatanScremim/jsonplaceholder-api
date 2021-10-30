import { Router } from 'express';

import User from '../models/User';
import UserService from '../services/UserService';

const userRouter = Router();

userRouter.get('/', async (req, res) => {

    const userService = new UserService();

    await userService.listUserApi();

    return res.json({
        message: 'Hello World'
    });
});

export default userRouter;
