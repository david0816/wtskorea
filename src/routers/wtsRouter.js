import express from "express"
import { wts, wtsLeadership, wtsMinistry, wtsMission, wtsVision } from "../controllers/pageController"

import routes from "../routes"

const wtsRouter = express.Router()

wtsRouter.get("/", wts)
wtsRouter.get(routes.wtsMission, wtsMission)
wtsRouter.get(routes.wtsLeadership, wtsLeadership)
wtsRouter.get(routes.wtsVision, wtsVision)
wtsRouter.get(routes.wtsMinistry, wtsMinistry)

export default wtsRouter