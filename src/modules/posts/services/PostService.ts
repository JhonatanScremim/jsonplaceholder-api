import axios from "axios";
import { inject, injectable } from "tsyringe";
import IPostDTO from "../dtos/IPostDTO";
import IPostRepository from "../repositories/IPostRepository";

@injectable()
export default class PostService {

    constructor(
        @inject('PostRepository')
        private postRepository: IPostRepository
    ){}

    public async listPostAPI(): Promise<Array<IPostDTO> | null>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        let res = JSON.stringify(response.data);
        let posts: Array<IPostDTO> = JSON.parse(res);

        return posts;
    }
}
