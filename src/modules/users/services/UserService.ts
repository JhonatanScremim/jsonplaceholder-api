import axios from 'axios';
import { inject, injectable } from 'tsyringe';

import IUserDTO from '../dtos/IUserDTO';
import Address from '../infra/typeorm/entities/Address';
import Geo from '../infra/typeorm/entities/Geo';
import User from '../infra/typeorm/entities/User';
import Company from '../infra/typeorm/entities/Company';
import IUserRepository from '../repositories/IUserRepository';
import IAddressRepository from '../repositories/IAddressRepository';
import ICompanyRepository from '../repositories/ICompanyRepository';

@injectable()
class UserService{

    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,

        @inject('AddressRepository')
        private addressRepository: IAddressRepository,

        @inject('CompanyRepository')
        private companyRepository: ICompanyRepository
    ){}

    public async listUserApi(): Promise<Array<IUserDTO> | null>{

        const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
        let res = JSON.stringify(response.data);

        let users: Array<IUserDTO> = JSON.parse(res);

        return users;
    }

    public async SaveInDataBase( idUsers: Array<number> ): Promise<Array<User> | null>{

        await this.ValidationUsers(idUsers);

        let usersDb: Array<User> = [];

        await Promise.all(idUsers.map(async (idUser) => {

            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${idUser}`);

            let res = JSON.stringify(response.data);
            let user: IUserDTO = JSON.parse(res);


            const geo = await this.addressRepository.createGeo({
                lat: user.address.geo.lat,
                lng: user.address.geo.lng,
            });

            const address = await this.addressRepository.createAddress({
                street: user.address.street,
                city: user.address.city,
                suite: user.address.suite,
                zipcode: user.address.zipcode,
                geoId: geo.id
            });

            const company = await this.companyRepository.create({
                name: user.company.name,
                bs: user.company.bs,
                catchPhrase: user.company.catchPhrase,
            });

            const newUser = await this.userRepository.create({
                name: user.name,
                username: user.username,
                email: user.email,
                userNumber: user.id,
                phone: user.phone,
                website: user.website,
                addressId: address.id,
                companyId: company.id,
            });
            usersDb.push(newUser);

        }));

        return usersDb;

    }

    private async ValidationUsers(idUsers: Array<number>): Promise<void>{

        let value = new Set(idUsers).size !== idUsers.length;

        if(value){
            throw new Error(`There are repeat numbers`);
        }

        await Promise.all(idUsers.map(async idUser => {

            let user = await this.userRepository.findByNumber(idUser);

            if(user){
                throw new Error(`User already exists: ${idUser}`);
            }
        }));
    }
}

export default UserService;
