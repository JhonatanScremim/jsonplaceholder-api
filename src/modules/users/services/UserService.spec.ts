
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

    it('ValidationUsers - User already exists', async () => {
        const fakeAddressRepository = new FakeAddressRepository();
        const fakeUserRepository = new FakeUserRepository();
        const fakeCompanyRepository = new FakeCompanyRepository();

        const userService = new UserService(fakeUserRepository, fakeAddressRepository, fakeCompanyRepository);


        await fakeUserRepository.create({
            name: 'Nome',
            userNumber: 1,
            email: 'email@gmail.com',
            phone: '132123',
            username: 'username',
            addressId: '12341212lçj1',
            companyId: '14po12lç31r',
            website: 'website',
        });

        expect(userService.SaveInDataBase([1])).rejects.toBeInstanceOf(Error);
    });

    it('ValidationUsers - There are repeat numbers', async () => {
        const fakeAddressRepository = new FakeAddressRepository();
        const fakeUserRepository = new FakeUserRepository();
        const fakeCompanyRepository = new FakeCompanyRepository();

        const userService = new UserService(fakeUserRepository, fakeAddressRepository, fakeCompanyRepository);

        expect(userService.SaveInDataBase([1, 1])).rejects.toBeInstanceOf(Error);
    });
})

