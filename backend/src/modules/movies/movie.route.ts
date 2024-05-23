import express from 'express';
import { MovieController } from './movie.controller';
const router = express.Router();

router.post('/', MovieController.createMovie)


export const MovieRouter = router;