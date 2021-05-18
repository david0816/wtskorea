"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router();

userRouter.get("/", function (req, res) {
  return res.send("user index");
});
userRouter.get(_routes["default"].userDetail, function (req, res) {
  return res.send("user detail");
});
userRouter.get(_routes["default"].editProfile, function (req, res) {
  return res.send("user edit");
});
userRouter.get(_routes["default"].changePassword, function (req, res) {
  return res.send("user password");
});
var _default = userRouter;
exports["default"] = _default;