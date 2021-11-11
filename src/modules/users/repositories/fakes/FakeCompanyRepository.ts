import ICompanyDTO from "@modules/users/dtos/ICompanyDTO";
import Company from "@modules/users/infra/typeorm/entities/Company";
import ICompanyRepository from "../ICompanyRepository";


export default class FakeCompanyRepository implements ICompanyRepository{

    public async create(company: ICompanyDTO): Promise<Company>{

        return new Company();
    }
}
