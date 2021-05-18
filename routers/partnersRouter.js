"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _pageController = require("../controllers/pageController");

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var partnersRouter = _express["default"].Router();

partnersRouter.get("/", _pageController.partners);
partnersRouter.get(_routes["default"].partnersBOS, _pageController.partnersBOS);
partnersRouter.get(_routes["default"].partnersHonors, _pageController.partnersHonors);
partnersRouter.get(_routes["default"].partnersCouncil, _pageController.partnersCouncil);
partnersRouter.get(_routes["default"].partnersOrganization, _pageController.partnersOrganization);
var _default = partnersRouter;
exports["default"] = _default;