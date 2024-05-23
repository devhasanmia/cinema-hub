import { TMovies } from "./movie.interface";
import Movie from "./movie.model";


const createMovieIntoDB = async (movieData: TMovies)=> {
    try {
        const movie = await Movie.create(movieData);
        return movie;
    } catch (error) {
        console.log(error);
    }
}


export const MovieService = {
    createMovieIntoDB
}