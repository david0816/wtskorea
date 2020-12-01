import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import routes from "./routes"
import globalRouter from "./routers/globalRouter"
import userRouter from "./routers/userRouter"
import wtsRouter from "./routers/wtsRouter"
import campaignRouter from "./routers/campaignRouter"
import conferenceRouter from "./routers/conferenceRouter"
import alumniRouter from "./routers/alumniRouter"

const app = express()

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(helmet())
app.use(morgan("dev"))

app.use(routes.home, globalRouter)
app.use(routes.users, userRouter)
app.use(routes.wts, wtsRouter)
app.use(routes.campaign, campaignRouter)
app.use(routes.conference, conferenceRouter)
app.use(routes.alumni, alumniRouter)

export default app;