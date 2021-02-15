import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import routes from "./routes"
import globalRouter from "./routers/globalRouter"
import userRouter from "./routers/userRouter"
import givingRouter from "./routers/givingRouter"
import newsRouter from "./routers/newsRouter"
import benefitRouter from "./routers/benefitRouter"
import campaignRouter from "./routers/campaignRouter"

const app = express()

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(helmet())
app.use(morgan("dev"))

app.use(routes.home, globalRouter)
app.use(routes.users, userRouter)
app.use(routes.campaign, campaignRouter)
app.use(routes.giving, givingRouter)
app.use(routes.benefit, benefitRouter)
app.use(routes.news, newsRouter)

export default app;