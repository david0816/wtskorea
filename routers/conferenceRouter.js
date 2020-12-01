import express from "express"
import routes from "../routes"

const conferenceRouter = express.Router()

conferenceRouter.get("/", (req, res) => res.send("Conference index"))

export default conferenceRouter