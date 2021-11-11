
import { getRepository, Repository } from 'typeorm';

import ICreateAddressDTO from '../../../dtos/ICreateAddressDTO';
import Address from '../entities/Address';
import IAddressRepository from '@modules/users/repositories/IAddressRepository';
import IGeoDTO from '../../../dtos/IGeoDTO';
import Geo from '../entities/Geo';

export default class AddressRepository implements IAddressRepository{

    private ormAddressRepository: Repository<Address>;
    private ormGeoRepository: Repository<Geo>;

    constructor(){
        this.ormAddressRepository = getRepository(Address);
        this.ormGeoRepository = getRepository(Geo);
    }

    public async createAddress(address: ICreateAddressDTO): Promise<Address> {

        const newAddress = await this.ormAddressRepository.save(this.ormAddressRepository.create({
            street: address.street,
            city: address.city,
            suite: address.suite,
            zipcode: address.zipcode,
            geoId: address.geoId,
        }))

        return newAddress;
    }

    public async createGeo(geo: IGeoDTO): Promise<Geo> {

        const newGeo = await this.ormGeoRepository.save(this.ormGeoRepository.create({
            lat: geo.lat,
            lng: geo.lng,
        }));

        return newGeo;
    }
}
