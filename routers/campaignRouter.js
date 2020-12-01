import express from "express"
import routes from "../routes"

const campaignRouter = express.Router()

campaignRouter.get("/", (req, res) => res.send("Campaign index"))
campaignRouter.get("/overview", (req, res) => res.send("Campaign overview"))
campaignRouter.get("/documents", (req, res) => res.send("Campaign documents"))
campaignRouter.get("/donation", (req, res) => res.send("Campaign donation"))

export default campaignRouter