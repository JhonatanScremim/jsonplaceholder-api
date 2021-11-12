
import FakeAddressRepository from '../repositories/fakes/FakeAddressRepository';
import FakeCompanyRepository from '../repositories/fakes/FakeCompanyRepository';
import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import UserService from './UserService';

describe('UserService', () => {

    it('ListApiUser', async () => {

        const fakeAddressRepository = new FakeAddressRepository();
        const fakeUserRepository = new FakeUserRepository();
        const fakeCompanyRepository = new FakeCompanyRepository();
        const userService = new UserService(fakeUserRepository, fakeAddressRepository, fakeCompanyRepository);

        const response = userService.listUserApi();

        expect(response).toBeDefined();
    });

    it('SaveInDatabaseUser', async () => {

        const fakeAddressRepository = new FakeAddressRepository();
        const fakeUserRepository = new FakeUserRepository();
        const fakeCompanyRepository = new FakeCompanyRepository();
        const userService = new UserService(fakeUserRepository, fakeAddressRepository, fakeCompanyRepository);

        const response = await userService.SaveInDataBase([1]);

        expect(response).toBeDefined();
    });
})

