import { Movie } from "../../movie/model/Movie";
import { ICreateMovieDTO, IMoviesRepository } from "../IMoviesRepository";

class MoviesRepository implements IMoviesRepository {
    movies: Movie[] = [];

    async create({ title, overview, time, directedBy, category }: ICreateMovieDTO): Promise<void> {
       const movie = new Movie();
       Object.assign(movie, {
           title,
           overview,
           time,
           directedBy,
           category,
       });

       this.movies.push(movie)

    }
    async list(): Promise<Movie[]> {
        const all = this.movies;
        return all;
    }
    
    async findByName(title: string): Promise<Movie> {
        const movie = this.movies.find((movie) => movie.title === title)
        return movie as Movie;
    }

}

export { MoviesRepository }