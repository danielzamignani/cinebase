import { Movie } from "../movie/model/Movie";

interface ICreateMovieDTO {
    title: string;
    overview: string;
    time: number;
    directedBy: string;
    category: string;
}

interface IMoviesRepository {
    create({title, overview, time, directedBy, category}: ICreateMovieDTO): Promise<void>;
    list(): Promise<Movie[]>;
    findByName(title: string): Promise<Movie>;
}

export { ICreateMovieDTO, IMoviesRepository };