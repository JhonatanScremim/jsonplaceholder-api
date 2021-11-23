import { uuid } from 'uuidv4';

import Post from "@modules/posts/infra/typeorm/entities/Post";
import ICreatePostDTO from '@modules/posts/dtos/ICreatePostDTO';
import IPostRepository from '../IPostRepository';

export default class FakePostRepository implements IPostRepository{

    private posts: Post[] = [];

    public async findByNumber(postNumber: number): Promise<Post | undefined>{
        return this.posts.find(x => x.postNumber === postNumber);
    }

    public async create(model: ICreatePostDTO): Promise<Post>{

        const post = new Post();

        Object.assign(post, {
            id: uuid(),
            body: model.body,
            postNumber: model.postNumber,
            title: model.title,
            userId: model.userId
        });

        this.posts.push(post);

        return post;
    }
}
