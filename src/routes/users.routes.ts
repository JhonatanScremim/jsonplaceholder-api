import { json, Router } from 'express';

import User from '../models/User';
import UserService from '../services/UserService';

const userRouter = Router();

userRouter.get('/', async (req, res) => {

    const userService = new UserService();

    var users = await userService.listUserApi();

    return res.json(users);
});

userRouter.post('/post-users', async (req, res) => {

    const { idUsers } = req.body;

    const userService = new UserService();

    var users = await userService.SaveInDataBase(idUsers);

    return res.json(users);
})

export default userRouter;
