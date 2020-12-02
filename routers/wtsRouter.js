import express from "express"
import { wts, wtsFaculty, wtsHistory, wtsKoreaOffice, wtsPresident } from "../controllers/pageController"
import routes from "../routes"

const wtsRouter = express.Router()

wtsRouter.get("/", wts)
wtsRouter.get(routes.wtsHistory, wtsHistory)
wtsRouter.get(routes.wtsPresident, wtsPresident)
wtsRouter.get(routes.wtsFaculty, wtsFaculty)
wtsRouter.get(routes.wtsKoreaOffice, wtsKoreaOffice)

export default wtsRouter