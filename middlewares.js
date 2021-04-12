import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Westminster Korea";
    res.locals.routes = routes;
    next();
};