import { boolean, number, object, string, array } from "zod";

const reviewSchema = object({
    email: string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string"
    }).email({ message: "Email must be a valid email address" }),
    rating: number({
        required_error: "Rating is required",
        invalid_type_error: "Rating must be a number",
    }).positive({
        message: "Rating must be a positive number"
    }),
    comment: string({
        required_error: "Comment is required",
        invalid_type_error: "Comment must be a string"
    }).min(10, "Comment must be at least 10 characters long")
        .max(1000, "Comment must be at most 1000 characters long"),
});

const movieValidationSchema = object({
    title: string({
        required_error: "Title is required",
        invalid_type_error: "Title must be a string"
    }).min(3, "Title must be at least 3 characters long")
        .max(100, "Title must be at most 100 characters long"),
    description: string({
        required_error: "Description is required",
        invalid_type_error: "Description must be a string"
    }).min(10, "Description must be at least 10 characters long")
        .max(1000, "Description must be at most 1000 characters long"),
    releaseDate: number({
        required_error: "Release Date is required",
        invalid_type_error: "Release Date must be a number",
    }),
    genre: string({
        required_error: "Genre is required",
        invalid_type_error: "Genre must be a string"
    }).min(3, "Genre must be at least 3 characters long")
        .max(100, "Genre must be at most 100 characters long"),
    isDeleted: boolean({
        required_error: "Is Deleted is required",
        invalid_type_error: "Is Deleted must be a boolean",
    }),
    viewCount: number({
        required_error: "View Count is required",
        invalid_type_error: "View Count must be a number",
    }).positive({
        message: "View Count must be a positive number"
    }),
    reviews: array(reviewSchema, {
        required_error: "Reviews are required",
        invalid_type_error: "Reviews must be an array of review objects",
    })
});

export default movieValidationSchema;
