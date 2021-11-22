import axios from "axios";
import { inject, injectable } from "tsyringe";
import Post from "../infra/typeorm/entities/Post";
import IPostDTO from "../dtos/IPostDTO";
import IPostRepository from "../repositories/IPostRepository";
import IUserRepository from "@modules/users/repositories/IUserRepository";

@injectable()
export default class PostService {

    constructor(
        @inject('PostRepository')
        private postRepository: IPostRepository,

        @inject('UserRepository')
        private userRepository: IUserRepository
    ){}

    public async listPostAPI(): Promise<Array<IPostDTO> | null>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        let res = JSON.stringify(response.data);
        let posts: Array<IPostDTO> = JSON.parse(res);


        return posts;
    }

    public async SaveInDatabase(idPosts: Array<number>): Promise<Array<Post> | undefined>{

        await this.ValidationPosts(idPosts);

        let posts: Array<Post> = [];

        await Promise.all(idPosts.map(async (idPost) => {

            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${idPost}`);

            let res = JSON.stringify(response.data);

            let post: IPostDTO = JSON.parse(res);

            let user = await this.userRepository.findByNumber(post.userId);

            if(user == null)
                throw new Error('O usuário do post não existe');

            const newPost = await this.postRepository.create({
                userId: user.id,
                body: post.body,
                postNumber: post.id,
                title: post.title
            })

            posts.push(newPost);

        }));

        return posts;
    }

    private async ValidationPosts(idPosts: Array<number>): Promise<void>{
        let value = new Set(idPosts).size !== idPosts.length;

        if(value){
            throw new Error(`There are repeat numbers`);
        }

        await Promise.all(idPosts.map(async idPost => {

            let user = await this.postRepository.findByNumber(idPost);

            if(user){
                throw new Error(`Post already exists: ${idPost}`);
            }
        }));
    }
}
