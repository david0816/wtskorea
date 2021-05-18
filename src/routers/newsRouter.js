import express from "express"
import { news, newsLetter, newsStory } from "../controllers/pageController"
import routes from "../routes"

const newsRouter = express.Router()

newsRouter.get("/", news)
newsRouter.get(routes.newsStory, newsStory)
newsRouter.get(routes.newsLetter, newsLetter)


export default newsRouter;