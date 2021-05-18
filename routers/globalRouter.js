"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _userController = require("../controllers/userController");

var _pageController = require("../controllers/pageController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var globalRouter = _express["default"].Router();

globalRouter.get(_routes["default"].home, _pageController.home);
globalRouter.get(_routes["default"].join, _userController.join);
globalRouter.get(_routes["default"].login, _userController.login);
globalRouter.get(_routes["default"].logout, _userController.logout);
globalRouter.get(_routes["default"].search, _pageController.search);
var _default = globalRouter;
exports["default"] = _default;