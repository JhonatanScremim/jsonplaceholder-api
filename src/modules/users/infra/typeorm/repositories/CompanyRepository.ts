import ICompanyRepository from "@modules/users/repositories/ICompanyRepository";
import { Repository, getRepository } from "typeorm";
import ICompanyDTO from "../../../dtos/ICompanyDTO";
import Company from "../entities/Company";


export default class CompanyRepository implements ICompanyRepository {

    private ormRepository: Repository<Company>

    constructor(){
        this.ormRepository = getRepository(Company);
    }

    public async create(company: ICompanyDTO): Promise<Company> {

        const newComapny = await this.ormRepository.save(this.ormRepository.create({
            name: company.name,
            catchPhrase: company.catchPhrase,
            bs: company.bs,
        }));

        return newComapny;
    }
}
