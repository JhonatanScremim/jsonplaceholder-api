import { json, Request, Response } from 'express';

export default class PostController {


    public async ListApiPost(request: Request, response: Response ): Promise<Response>{

        return response.json();
    }

}
