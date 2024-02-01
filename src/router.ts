import {Router, Request, Response} from "express";
import { attMovie, createMovie, findMovieById, getAllMovies, removeMovie } from "./controllers/movieControllers";
import { movieCreateValidation } from "./middleware/movieValidation";

// validations
import {validate} from "./middleware/handleValidation"

const router = Router()

export default router
.get("/test", (req: Request, res: Response) =>{
    res.status(200).send("Api working")
})
.post("/movie", movieCreateValidation(), validate, createMovie)
.get("/movie/:id", findMovieById)
.get("/movie", getAllMovies)
.delete("/movie/:id", removeMovie)
.patch("/movie/:id", movieCreateValidation(), validate, attMovie)