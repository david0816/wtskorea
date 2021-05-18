"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _pageController = require("../controllers/pageController");

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var givingRouter = _express["default"].Router();

givingRouter.get("/", _pageController.giving);
givingRouter.get(_routes["default"].givingAction, _pageController.givingAction);
givingRouter.get(_routes["default"].givingOnline, _pageController.givingOnline);
givingRouter.get(_routes["default"].givingMyPage, _pageController.givingMyPage);
givingRouter.get(_routes["default"].givingTaxBenefit, _pageController.givingTaxBenefit);
givingRouter.get(_routes["default"].givingQuestion, _pageController.givingQuestion);
var _default = givingRouter;
exports["default"] = _default;