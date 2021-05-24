import express from "express"
import { news, newsLetter, newsNotice, newsStory } from "../controllers/pageController"
import routes from "../routes"

const newsRouter = express.Router()

newsRouter.get("/", news)
newsRouter.get(routes.newsNotice, newsNotice)
newsRouter.get(routes.newsStory, newsStory)
newsRouter.get(routes.newsLetter, newsLetter)


export default newsRouter;