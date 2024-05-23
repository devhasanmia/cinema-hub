import express, { Request, Response } from 'express';
import { MovieRouter } from './modules/movies/movie.route';
const app = express()

// Middleware
app.use(express.json());



// Route Handle
app.use('/api/movies', MovieRouter)

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    message:"Ok"
  })
})

export default app

