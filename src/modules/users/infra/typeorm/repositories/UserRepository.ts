import { getRepository, Repository } from 'typeorm';

import User from '../entities/User';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import ICreateUserDTO from '../../../dtos/ICreateUserDTO';

export default class UserRepository implements IUserRepository{

    private ormRepository: Repository<User>;

    constructor(){
        this.ormRepository = getRepository(User);
    }

    public async findByNumber(userNumber: number): Promise<User | undefined>{
        return await this.ormRepository.findOne({
            where: {userNumber}
        });

    }

    public async create(user: ICreateUserDTO): Promise<User>{

        const newUser = await this.ormRepository.save(this.ormRepository.create({
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
            userNumber: user.userNumber,
            website: user.website,
            addressId: user.addressId,
            companyId: user.companyId,
        }));

        return newUser;
    }


}

