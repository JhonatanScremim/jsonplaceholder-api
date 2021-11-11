import AddressDTO from "./IAddressDTO";
import CompanyDTO from "./ICompanyDTO";

export default interface IUserDTO{
    id: number;
    name: string;
    username: string;
    email: string;
    address: AddressDTO;
    phone: string;
    website: string;
    company: CompanyDTO;
}
