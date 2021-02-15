import express from "express"
import { campaign, campaignBrochure, campaignPresident, campaignProgram, campaignReport} from "../controllers/pageController"
import routes from "../routes"

const campaignRouter = express.Router()

campaignRouter.get("/", campaign)
campaignRouter.get(routes.campaignPresident, campaignPresident)
campaignRouter.get(routes.campaignProgram, campaignProgram)
campaignRouter.get(routes.campaignBrochure, campaignBrochure)
campaignRouter.get(routes.campaignReport, campaignReport)

export default campaignRouter