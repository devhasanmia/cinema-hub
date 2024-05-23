import { Schema, model } from "mongoose";
import { TMovies, TReview } from "./movie.interface";

const ReviewSchema = new Schema<TReview>({
    email: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

const movieSchema = new Schema<TMovies>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    viewCount: {
        type: Number,
        default: 0
    },
    reviews: {
        type: [ReviewSchema],
        default: []
    }
})


const Movie = model<TMovies>("Movie", movieSchema);
export default Movie;