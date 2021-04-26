import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

class CreateMovieController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {title, overview, time, directedBy, category } = request.body;

        const createMovieUseCase = container.resolve(CreateMovieUseCase);

        await createMovieUseCase.execute({title, overview, time, directedBy, category});

        return response.status(201).send();
    }
}

export { CreateMovieController }