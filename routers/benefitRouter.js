"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _pageController = require("../controllers/pageController");

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var benefitRouter = _express["default"].Router();

benefitRouter.get("/", _pageController.benefit);
benefitRouter.get(_routes["default"].benefitDonors, _pageController.benefitDonors);
benefitRouter.get(_routes["default"].benefitHonors, _pageController.benefitHonors);
var _default = benefitRouter;
exports["default"] = _default;