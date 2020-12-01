import express from "express"
import routes from "../routes"

const alumniRouter = express.Router()

alumniRouter.get("/", (req, res) => res.send("Alumni"))

export default alumniRouter;