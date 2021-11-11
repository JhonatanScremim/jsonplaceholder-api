import IAddressDTO from "@modules/users/dtos/IAddressDTO";
import ICreateAddressDTO from "@modules/users/dtos/ICreateAddressDTO";
import IGeoDTO from "@modules/users/dtos/IGeoDTO";
import Address from "@modules/users/infra/typeorm/entities/Address";
import Geo from "@modules/users/infra/typeorm/entities/Geo";
import IAddressRepository from "../IAddressRepository";

export default class FakeAddressRepository implements IAddressRepository {

    public async createGeo(geo: IGeoDTO): Promise<Geo> {

        return new Geo();
    }

    public async createAddress(address: ICreateAddressDTO): Promise<Address>{

        return new Address();
    }

}
