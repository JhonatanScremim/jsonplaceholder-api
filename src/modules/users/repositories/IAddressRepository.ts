import ICreateAddressDTO from "../dtos/ICreateAddressDTO";
import IGeoDTO from "../dtos/IGeoDTO";
import Address from "../infra/typeorm/entities/Address";
import Geo from "../infra/typeorm/entities/Geo";

export default interface IAddressRepository {
    createAddress(address: ICreateAddressDTO): Promise<Address>;

    createGeo(geo: IGeoDTO): Promise<Geo>;
}
