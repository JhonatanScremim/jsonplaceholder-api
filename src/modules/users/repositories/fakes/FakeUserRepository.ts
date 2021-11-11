import ICreateUserDTO from "@modules/users/dtos/ICreateUserDTO";
import IUserRepository from "../IUserRepository";
import User from '../../infra/typeorm/entities/User';


export default class FakeUserRepository implements IUserRepository{

    public async create(user: ICreateUserDTO): Promise<User> {
        return new User();
    }

}
