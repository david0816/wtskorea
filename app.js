"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

var _routes = _interopRequireDefault(require("./routes"));

var _globalRouter = _interopRequireDefault(require("./routers/globalRouter"));

var _userRouter = _interopRequireDefault(require("./routers/userRouter"));

var _givingRouter = _interopRequireDefault(require("./routers/givingRouter"));

var _newsRouter = _interopRequireDefault(require("./routers/newsRouter"));

var _benefitRouter = _interopRequireDefault(require("./routers/benefitRouter"));

var _campaignRouter = _interopRequireDefault(require("./routers/campaignRouter"));

var _wtsRouter = _interopRequireDefault(require("./routers/wtsRouter"));

var _partnersRouter = _interopRequireDefault(require("./routers/partnersRouter"));

var _middlewares = require("./middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _helmet["default"])());
app.set("view engine", "pug");
app.set("views", _path["default"].join(__dirname, "views"));
app.use((0, _cookieParser["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _morgan["default"])("dev"));
app.use("/images", _express["default"]["static"](_path["default"].join(__dirname, "images")));
app.use("/static", _express["default"]["static"](_path["default"].join(__dirname, "static")));
app.use(_middlewares.localsMiddleware);
app.use(_routes["default"].home, _globalRouter["default"]);
app.use(_routes["default"].users, _userRouter["default"]);
app.use(_routes["default"].wts, _wtsRouter["default"]);
app.use(_routes["default"].partners, _partnersRouter["default"]);
app.use(_routes["default"].campaign, _campaignRouter["default"]);
app.use(_routes["default"].giving, _givingRouter["default"]);
app.use(_routes["default"].benefit, _benefitRouter["default"]);
app.use(_routes["default"].news, _newsRouter["default"]);
var _default = app;
exports["default"] = _default;