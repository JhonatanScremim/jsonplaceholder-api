import ICreateUserDTO from "@modules/users/dtos/ICreateUserDTO";
import IUserRepository from "../IUserRepository";
import User from '../../infra/typeorm/entities/User';
import { uuid } from "uuidv4";


export default class FakeUserRepository implements IUserRepository{

    private users: User[] = [];

    public async create({name, email, username, userNumber, addressId, companyId,
        phone, website}: ICreateUserDTO): Promise<User> {
            const user = new User();

            Object.assign(user, {id:uuid(), name, email, username, userNumber, phone,
                website, addressId, companyId});

            this.users.push(user);

            return user;
    }

    public async findByNumber(idUser: number): Promise<User | undefined>{

        return this.users.find(x => x.userNumber === idUser);
    }

}
