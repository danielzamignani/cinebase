import { Router } from "express";
import { CreateMovieController } from "../../modules/movie/useCases/createMovie/CreateMovieController";
import { ListMoviesController } from "../../modules/movie/useCases/listMovies/ListMoviesController";

const moviesRoutes = Router();

const createMovieController = new CreateMovieController();
const listMoviesController = new ListMoviesController();

moviesRoutes.post("/", createMovieController.handle);
moviesRoutes.get("/", listMoviesController.handle);

export{ moviesRoutes }