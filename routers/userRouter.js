import express from "express"
import routes from "../routes"

const userRouter = express.Router()

userRouter.get("/", (req, res) => res.send("user index"))
userRouter.get("/:id", (req, res) => res.send("user detail"))
userRouter.get("/edit", (req, res) => res.send("user edit"))
userRouter.get("/password", (req, res) => res.send("user password"))

export default userRouter