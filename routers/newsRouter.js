"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _pageController = require("../controllers/pageController");

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var newsRouter = _express["default"].Router();

newsRouter.get("/", _pageController.news);
newsRouter.get(_routes["default"].newsStory, _pageController.newsStory);
newsRouter.get(_routes["default"].newsLetter, _pageController.newsLetter);
var _default = newsRouter;
exports["default"] = _default;