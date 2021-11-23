import FakeUserRepository from "@modules/users/repositories/fakes/FakeUserRepository";
import FakePostRepository from "../repositories/fakes/FakePostRepository"
import PostService from "./PostService";


describe('PostService', () => {

    it('ListApiPost', async () => {
        const fakePostRepository = new FakePostRepository();
        const fakeUserRepository = new FakeUserRepository();

        const postService = new PostService(fakePostRepository, fakeUserRepository);

        const response = postService.listPostAPI();

        expect(response).toBeDefined();
    });

    it('SaveInDatabasePost', async () => {
        const fakePostRepository = new FakePostRepository();
        const fakeUserRepository = new FakeUserRepository();

        const postService = new PostService(fakePostRepository, fakeUserRepository);

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

        const response = await postService.SaveInDatabase([1]);

        expect(response).toBeDefined();
    });

    it('SaveInDatabasePost - User does not exist', async () => {
        const fakePostRepository = new FakePostRepository();
        const fakeUserRepository = new FakeUserRepository();

        const postService = new PostService(fakePostRepository, fakeUserRepository);

        await expect(postService.SaveInDatabase([1])).rejects.toBeInstanceOf(Error);
    });

    it('ValidationPost - Post already exists', async () => {
        const fakePostRepository = new FakePostRepository();
        const fakeUserRepository = new FakeUserRepository();

        const postService = new PostService(fakePostRepository, fakeUserRepository);
        await fakePostRepository.create({
            body: 'body',
            title: 'title',
            postNumber: 1,
            userId: '123456789'
        });

        expect(postService.SaveInDatabase([1])).rejects.toBeInstanceOf(Error);
    });

    it('ValidationPost - There are repeat numbers', async () => {
        const fakePostRepository = new FakePostRepository();
        const fakeUserRepository = new FakeUserRepository();

        const postService = new PostService(fakePostRepository, fakeUserRepository);

        expect(postService.SaveInDatabase([1, 1])).rejects.toBeInstanceOf(Error);
    });
})
