import PostService from '@modules/posts/services/PostService';
import { json, Request, Response } from 'express';
import { container } from 'tsyringe';

export default class PostController {


    public async ListApiPost(request: Request, response: Response ): Promise<Response>{

        try{
            const postService = container.resolve(PostService);

            return response.json(await postService.listPostAPI());
        }
        catch(err){
            return response.json(400).json( {error: (err as Error).message} );
        }

    }

    public async SaveInDataBase(request: Request, response: Response): Promise<Response>{

        try{
            const { idPosts } = request.body;

            const postService = container.resolve(PostService);

            return response.json(await postService.SaveInDatabase(idPosts));
        }
        catch(err){
            return response.json(400).json( {error: (err as Error).message} );
        }
    }
}
