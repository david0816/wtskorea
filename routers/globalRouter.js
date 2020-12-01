import express from "express"
import routes from "../routes"

const globalRouter = express.Router()

globalRouter.get("/", (req, res) => res.send("Home"))
globalRouter.get("/join", (req, res) => res.send("join"))
globalRouter.get("/login", (req, res) => res.send("login"))
globalRouter.get("/search", (req, res) => res.send("search"))

export default globalRouter