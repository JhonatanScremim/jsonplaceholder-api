import axios from 'axios';
import UserDTO from '../interfaces/UserDTO';

import User from '../models/User';

class UserService{

    public async listUserApi(): Promise<Array<UserDTO> | null>{

        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        let res = response.toString();
        let users: Array<UserDTO> = JSON.parse(res);



        return users;
    }
}

export default UserService;
