import { inject, injectable } from "tsyringe";
import { IMoviesRepository } from "../../../repositories/IMoviesRepository";
import { Movie } from "../../model/Movie";

interface IRequest {
    title: string;
    overview: string;
    time: number;
    directedBy: string;
    category: string;
}

@injectable()
class CreateMovieUseCase {
    constructor(
        @inject("MoviesRepository")
        private moviesRepository: IMoviesRepository
    ){}

    async execute({
        title,
        overview,
        time,
        directedBy,
        category,
    }: IRequest): Promise<void> {
        const movieAlreadyExists = await this.moviesRepository.findByName(title);

        if(movieAlreadyExists) {
            throw new Error("Movie already exists!")
        }

        this.moviesRepository.create({title, overview, time, directedBy, category});
    }
}

export { CreateMovieUseCase }