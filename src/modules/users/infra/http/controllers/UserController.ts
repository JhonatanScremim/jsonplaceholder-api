import UserService from '@modules/users/services/UserService';
import {Request, Response} from 'express';
import { container } from 'tsyringe';

export default class UserController{

    public async ListApiUsers(request: Request, response: Response): Promise<Response> {

        try{
            const userService = container.resolve(UserService);

            var users = await userService.listUserApi();

            return response.json(users);

        } catch(err){
            return response.json(400).json({ error: (err as Error).message});
        }

    }

    public async SaveInDataBase(request: Request, response: Response): Promise<Response> {
        try{
            const { idUsers } = request.body;

            const userService = container.resolve(UserService);

            var users = await userService.SaveInDataBase(idUsers);

            return response.json(users);
        }
        catch(err){
            return response.json(400).json({ error: (err as Error).message});
        }
    }
}
