import axios from 'axios';

import User from '../models/User';

class UserService{

    public async listUserApi(): Promise<Array<User> | null>{

        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response);
        return null;
    }
}

export default UserService;
