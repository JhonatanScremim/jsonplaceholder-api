import ICreatePostDTO from "../dtos/ICreatePostDTO";
import IPostDTO from "../dtos/IPostDTO";
import Post from "../infra/typeorm/infra/Post";

export default interface IPostRepository{

    findByNumber(number: number): Promise<Post | undefined>;

    create(post: ICreatePostDTO): Promise<Post>;
}
