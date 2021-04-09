import express from "express"
import { campaign, campaignBoardOfSponsors, campaignFive, campaignPresident, campaignReport} from "../controllers/pageController"
import routes from "../routes"

const campaignRouter = express.Router()

campaignRouter.get("/", campaign)
campaignRouter.get(routes.campaignPresident, campaignPresident)
campaignRouter.get(routes.campaignBoardOfSponsors, campaignBoardOfSponsors)
campaignRouter.get(routes.campaignFive, campaignFive)
campaignRouter.get(routes.campaignReport, campaignReport)

export default campaignRouter