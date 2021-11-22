import PostRepository from '@modules/posts/infra/typeorm/repositories/PostRepository';
import IPostRepository from '@modules/posts/repositories/IPostRepository';
import AddressRepository from '@modules/users/infra/typeorm/repositories/AddressRepository';
import CompanyRepository from '@modules/users/infra/typeorm/repositories/CompanyRepository';
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository';
import IAddressRepository from '@modules/users/repositories/IAddressRepository';
import ICompanyRepository from '@modules/users/repositories/ICompanyRepository';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>(
    'UserRepository', UserRepository
);
container.registerSingleton<IAddressRepository>(
    'AddressRepository', AddressRepository
);

container.registerSingleton<ICompanyRepository>(
    'CompanyRepository', CompanyRepository
);

container.registerSingleton<IPostRepository>(
    'PostRepository', PostRepository
);

