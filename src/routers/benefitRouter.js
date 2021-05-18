import express from "express"
import { benefit, benefitDonors, benefitHonors } from "../controllers/pageController"
import routes from "../routes"

const benefitRouter = express.Router()

benefitRouter.get("/", benefit)
benefitRouter.get(routes.benefitDonors, benefitDonors)
benefitRouter.get(routes.benefitHonors, benefitHonors)


export default benefitRouter