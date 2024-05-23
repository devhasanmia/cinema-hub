import { Request, Response } from "express";
import movieValidationSchema from "./MovieValidation";
import { MovieService } from "./movie.service";

const createMovie = async (req: Request, res: Response) => {
    try {
        const movie = req.body;
        const ValidateData = movieValidationSchema.parse(movie);
        const movieData = await MovieService.createMovieIntoDB(ValidateData);
        res.status(201).json({
            message: "Movie created successfully!",
            data: movieData
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}

export const MovieController = {
    createMovie
}