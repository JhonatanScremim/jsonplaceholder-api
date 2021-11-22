import ICreatePostDTO from "@modules/posts/dtos/ICreatePostDTO";
import IPostDTO from "@modules/posts/dtos/IPostDTO";
import IPostRepository from "@modules/posts/repositories/IPostRepository";
import { getRepository, Repository } from "typeorm";
import Post from "../entities/Post";


export default class PostRepository implements IPostRepository{

    private ormRepository: Repository<Post>;

    constructor(){
        this.ormRepository = getRepository(Post);
    }

    public async findByNumber(postNumber: number): Promise<Post | undefined>{
        return await this.ormRepository.findOne({
            where: {postNumber}
        });
    }

    public async create(model: ICreatePostDTO): Promise<Post>{
        return await this.ormRepository.save(this.ormRepository.create({
            postNumber: model.postNumber,
            userId: model.userId,
            title: model.title,
            body: model.body
        }));
    }

}
