import express from "express"
import routes from "../routes"

const wtsRouter = express.Router()

wtsRouter.get("/", (req, res) => res.send("wts index"))
wtsRouter.get("/history", (req, res) => res.send("wts history"))
wtsRouter.get("/president", (req, res) => res.send("wts president"))
wtsRouter.get("/faculty", (req, res) => res.send("wts faculty"))
wtsRouter.get("/korea-office", (req, res) => res.send("wts korea office"))

export default wtsRouter