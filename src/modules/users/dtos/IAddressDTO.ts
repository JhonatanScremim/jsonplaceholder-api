import GeoDTO from "./IGeoDTO";

export default interface IAddressDTO{
    street: string;
    suite: string;
    city: string;
    zipcode:string;
    geo: GeoDTO;
}
