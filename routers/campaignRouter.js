"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _pageController = require("../controllers/pageController");

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var campaignRouter = _express["default"].Router();

campaignRouter.get("/", _pageController.campaign);
campaignRouter.get(_routes["default"].campaignPresident, _pageController.campaignPresident);
campaignRouter.get(_routes["default"].campaignBoardOfSponsors, _pageController.campaignBoardOfSponsors);
campaignRouter.get(_routes["default"].campaignFive, _pageController.campaignFive);
campaignRouter.get(_routes["default"].campaignReport, _pageController.campaignReport);
var _default = campaignRouter;
exports["default"] = _default;