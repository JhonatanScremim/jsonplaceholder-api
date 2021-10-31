import axios from 'axios';
import { getRepository } from 'typeorm';

import UserDTO from '../interfaces/UserDTO';
import Address from '../models/Address';
import Geo from '../models/Geo';
import User from '../models/User';
import Company from '../models/Company';

class UserService{

    public async listUserApi(): Promise<Array<UserDTO> | null>{


        const response = await axios.get('https://jsonplaceholder.typicode.com/users/');

        let res = JSON.stringify(response.data);
        let users: Array<UserDTO> = JSON.parse(res);

        return users;
    }

    public async SaveInDataBase( idUsers: Array<number> ): Promise<Array<User> | null>{

        let usersDb: Array<User> = [];

        idUsers.forEach(async idUser => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${idUser}`);

            const userRepository = getRepository(User);
            const addressRepository = getRepository(Address);
            const geoRepository = getRepository(Geo);
            const companyRepository = getRepository(Company);

            let res = JSON.stringify(response.data);
            let user: UserDTO = JSON.parse(res);

            await geoRepository.save(geoRepository.create({
                lat: user.address.geo.lat,
                lng: user.address.geo.lng,
            }));

            await geoRepository.save(geoRepository.create({
                lat: user.address.geo.lat,
                lng: user.address.geo.lng,
            }));

            let geo = await geoRepository.findOne({
                where: {
                    lat: user.address.geo.lat,
                }
            });

            await addressRepository.save(addressRepository.create({
                street: user.address.street,
                suite: user.address.suite,
                city: user.address.city,
                zipcode: user.address.zipcode,
                geoId: geo?.id
            }));

            let address = await addressRepository.findOne({
                where: {
                    street: user.address.street,
                    suite: user.address.suite,
                    city: user.address.city,
                    zipcode: user.address.zipcode,
                }
            });

            await companyRepository.save(companyRepository.create({
                name: user.company.name,
                catchPhrase: user.company.catchPhrase,
                bs: user.company.bs,
            }));

            let company = await companyRepository.findOne({
                where: {
                    name: user.company.name,
                    catchPhrase: user.company.catchPhrase,
                    bs: user.company.bs,
                }
            });

            let u = await userRepository.save(userRepository.create({
                name: user.name,
                userNumber: user.id,
                username: user.username,
                email: user.email,
                addressId: address?.id,
                phone: user.phone,
                website: user.website,
                companyId: company?.id,
            }));

            usersDb.push(u);
        });
        return usersDb;
    }
}

export default UserService;
