import ICompanyDTO from "../dtos/ICompanyDTO";
import Company from "../infra/typeorm/entities/Company";


export default interface ICompanyRepository {
    create(company: ICompanyDTO): Promise<Company>;
}
