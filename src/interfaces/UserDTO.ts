import AddressDTO from "./AddressDTO";
import CompanyDTO from "./CompanyDTO";

interface UserDTO{
    id: number;
    name: string;
    username: string;
    email: string;
    address: AddressDTO;
    phone: string;
    website: string;
    company: CompanyDTO;
}

export default UserDTO;
