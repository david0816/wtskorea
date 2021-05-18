import express from "express"
import { giving, givingAction, givingMyPage, givingOnline, givingQuestion, givingTaxBenefit } from "../controllers/pageController"
import routes from "../routes"

const givingRouter = express.Router()

givingRouter.get("/", giving)
givingRouter.get(routes.givingAction, givingAction)
givingRouter.get(routes.givingOnline, givingOnline)
givingRouter.get(routes.givingMyPage, givingMyPage)
givingRouter.get(routes.givingTaxBenefit, givingTaxBenefit)
givingRouter.get(routes.givingQuestion, givingQuestion)

export default givingRouter