import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import path from "path"
import routes from "./routes"
import globalRouter from "./routers/globalRouter"
import userRouter from "./routers/userRouter"
import givingRouter from "./routers/givingRouter"
import newsRouter from "./routers/newsRouter"
import benefitRouter from "./routers/benefitRouter"
import campaignRouter from "./routers/campaignRouter"
import wtsRouter from "./routers/wtsRouter"
import partnersRouter from "./routers/partnersRouter"
import { localsMiddleware } from "./middlewares"

const app = express()

app.use(helmet())
app.set("view engine","pug")
app.set("views", path.join(__dirname, "views"))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan("dev"))

app.use(express.static(__dirname+"/images"))
app.use("/static", express.static(path.join(__dirname, "static")))

app.use(localsMiddleware)

app.use(routes.home, globalRouter)
app.use(routes.users, userRouter)
app.use(routes.wts, wtsRouter)
app.use(routes.partners, partnersRouter)
app.use(routes.campaign, campaignRouter)
app.use(routes.giving, givingRouter)
app.use(routes.benefit, benefitRouter)
app.use(routes.news, newsRouter)

export default app;