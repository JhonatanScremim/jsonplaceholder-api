import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUserRepository{
    findByNumber(userNumber: number): Promise<User | undefined>;

    create(user: ICreateUserDTO): Promise<User>;
}
