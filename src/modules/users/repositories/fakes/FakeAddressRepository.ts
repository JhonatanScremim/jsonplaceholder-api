import { uuid } from 'uuidv4';

import IAddressDTO from "@modules/users/dtos/IAddressDTO";
import ICreateAddressDTO from "@modules/users/dtos/ICreateAddressDTO";
import IGeoDTO from "@modules/users/dtos/IGeoDTO";
import Address from "@modules/users/infra/typeorm/entities/Address";
import Geo from "@modules/users/infra/typeorm/entities/Geo";
import IAddressRepository from "../IAddressRepository";

export default class FakeAddressRepository implements IAddressRepository {

    private geos: Geo[] = [];
    private listAddress: Address[] = [];

    public async createGeo({lat, lng}: IGeoDTO): Promise<Geo> {

        const geo = new Geo();

        Object.assign(geo, {id:uuid(), lat, lng});

        this.geos.push(geo);

        return geo;
    }

    public async createAddress({street, city, suite, zipcode, geoId}: ICreateAddressDTO): Promise<Address>{
        const address = new Address();

        Object.assign(address, {id:uuid(), street, city, suite, zipcode, geoId});

        this.listAddress.push(address);

        return address;
    }

}
