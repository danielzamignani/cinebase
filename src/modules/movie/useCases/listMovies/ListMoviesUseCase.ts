import { inject, injectable } from "tsyringe";
import { IMoviesRepository } from "../../../repositories/IMoviesRepository";
import { Movie } from "../../model/Movie";

@injectable()
class ListMoviesUseCase {
    constructor(
        @inject("MoviesRepository")
        private moviesRepository: IMoviesRepository
    ){}

    async execute(): Promise<Movie[]> {
        const movies = await this.moviesRepository.list();
        return movies;
    }

}

export { ListMoviesUseCase }