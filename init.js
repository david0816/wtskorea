"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = 3000;

var handleListening = function handleListening() {
  return console.log("\u2705 Listening on: http://localhost:".concat(PORT));
};

_app["default"].listen(PORT, handleListening);