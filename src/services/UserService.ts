import axios from 'axios';
import { getRepository } from 'typeorm';

import UserDTO from '../interfaces/UserDTO';
import Address from '../models/Address';
import Geo from '../models/Geo';
import User from '../models/User';
import Company from '../models/Company';

class UserService{

    public async listUserApi(): Promise<Array<UserDTO> | null>{


        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');

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
            }
        });

        console.log(user.company);

        await companyRepository.save(companyRepository.create({
            name: user.company.name,
            catchPhrase: user.company.catchPhrase,
            bs: user.company.bs,
        }));

        // let company = await companyRepository.findOne({
        //     where: {
        //         name: user.company.name,
        //     }
        // });

        // await userRepository.save(userRepository.create({
        //     name: user.name,
        //     userNumber: user.id,
        //     username: user.username,
        //     email: user.email,
        //     addressId: address?.id,
        //     phone: user.phone,
        //     website: user.website,
        //     companyId: company?.id,
        // }))




        return null;
    }
}

export default UserService;
