import GeoDTO from "./GeoDTO";

interface AddressDTO{
    street: string;
    suite: string;
    city: string;
    zipcode:string;
    geo: GeoDTO;
}

export default AddressDTO;
