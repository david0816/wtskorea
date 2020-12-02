import express from "express"
import routes from "../routes"

const conferenceRouter = express.Router()

conferenceRouter.get("/", (req, res) => res.send("Conference index"))
conferenceRouter.get(routes.conferenceRegister, (req, res) => res.send("Conference register"))
conferenceRouter.get(routes.conferenceLecture, (req, res) => res.send("Conference lecture"))
conferenceRouter.get(routes.conferenceNotice, (req, res) => res.send("Conference notice"))

export default conferenceRouter