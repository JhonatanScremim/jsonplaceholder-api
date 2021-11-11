import axios from 'axios';
import FakeAddressRepository from '../repositories/fakes/FakeAddressRepository';
import FakeCompanyRepository from '../repositories/fakes/FakeCompanyRepository';
import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import UserService from './UserService';
jest.mock('axios');

const mockAxios = axios as jest.Mocked<typeof axios>;

it('ListApiUser', async () => {

    const fakeAddressRepository = new FakeAddressRepository();
    const fakeUserRepository = new FakeUserRepository();
    const fakeCompanyRepository = new FakeCompanyRepository();

    const userService = new UserService(fakeUserRepository, fakeAddressRepository, fakeCompanyRepository);


})
