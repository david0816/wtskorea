"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _pageController = require("../controllers/pageController");

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var wtsRouter = _express["default"].Router();

wtsRouter.get("/", _pageController.wts);
wtsRouter.get(_routes["default"].wtsMission, _pageController.wtsMission);
wtsRouter.get(_routes["default"].wtsLeadership, _pageController.wtsLeadership);
wtsRouter.get(_routes["default"].wtsVision, _pageController.wtsVision);
wtsRouter.get(_routes["default"].wtsMinistry, _pageController.wtsMinistry);
var _default = wtsRouter;
exports["default"] = _default;