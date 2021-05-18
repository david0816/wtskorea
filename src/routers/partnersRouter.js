import express from "express"
import { partners, partnersBOS, partnersCouncil, partnersHonors, partnersOrganization } from "../controllers/pageController"
import routes from "../routes"

const partnersRouter = express.Router()

partnersRouter.get("/", partners)
partnersRouter.get(routes.partnersBOS, partnersBOS)
partnersRouter.get(routes.partnersHonors, partnersHonors)
partnersRouter.get(routes.partnersCouncil, partnersCouncil)
partnersRouter.get(routes.partnersOrganization, partnersOrganization)

export default partnersRouter