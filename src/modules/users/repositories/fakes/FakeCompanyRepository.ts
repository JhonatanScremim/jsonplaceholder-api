import ICompanyDTO from "@modules/users/dtos/ICompanyDTO";
import Company from "@modules/users/infra/typeorm/entities/Company";
import { uuid } from "uuidv4";
import ICompanyRepository from "../ICompanyRepository";


export default class FakeCompanyRepository implements ICompanyRepository{

    private companies: Company[] =[];

    public async create({name, catchPhrase, bs}: ICompanyDTO): Promise<Company>{
        const company = new Company();

        Object.assign(company, {id:uuid(), name, catchPhrase, bs});

        this.companies.push(company);

        return company;
    }
}
