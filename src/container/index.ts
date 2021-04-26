import { container } from "tsyringe";
import { IMoviesRepository } from "../modules/repositories/IMoviesRepository";
import { MoviesRepository } from "../modules/repositories/implemetatinos/MoviesRepository";

container.registerSingleton<IMoviesRepository>(
    "MoviesRepository",
    MoviesRepository
);