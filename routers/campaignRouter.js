import express from "express"
import routes from "../routes"

const campaignRouter = express.Router()

campaignRouter.get("/", (req, res) => res.send("Campaign index"))
campaignRouter.get(routes.campaginOverview, (req, res) => res.send("Campaign overview"))
campaignRouter.get(routes.campaignDocuments, (req, res) => res.send("Campaign documents"))
campaignRouter.get(routes.campaignDonation, (req, res) => res.send("Campaign donation"))

export default campaignRouter